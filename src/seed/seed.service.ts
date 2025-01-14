import { Injectable } from '@nestjs/common';
import { USERS_SEED } from './data/users.seed';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly usersService: UsersService,
  ) {

  }

  populateDB(){
    this.usersService.fillUsersWithSeedData(USERS_SEED);
    return 'Seed executed successfully';
  }
}
