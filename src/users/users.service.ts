import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {

  private users: User[]=[
    // {
    //   id: uuid(),
    //   name: 'John Doe',
    //   email: 'fran170201@gmail.com',
    //   password: '123456',
    //   status: true,
    //   createdAt: new Date()
    // }
  ]

  create(createUserDto: CreateUserDto) {
    const {name, email, password, status} = createUserDto;
    const user:User = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      email: email,
      password: password,
      status: status,
      createdAt: new Date()
    }
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user= this.users.find((user)=> user.id === id);
    if(!user){
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    let userDB = this.findOne(id);
    this.users = this.users.map(user=>{
      if(user.id===id){
        userDB.updatedAt = new Date();
        userDB = {...userDB, ...updateUserDto};
        return userDB;
      }
      return user;
    })
    return userDB;
  }

  remove(id: string) {
    this.users = this.users.filter((user)=> user.id !== id);
  }

  fillUsersWithSeedData(user: User[]){
    this.users = user;
  }

}
