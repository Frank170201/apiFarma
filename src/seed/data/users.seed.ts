import { User } from "src/users/entities/user.entity";
import { v4 as uuid } from 'uuid';

export const USERS_SEED: User[] = [
    {
        id: uuid(),
        name: 'Francisco Santamaria',
        email: 'fran170201@gmail.com',
        password: '123456',
        status: true,
        createdAt: new Date()
    },
    {
        id: uuid(),
        name: 'Juan jose',
        email: 'juanjose@gmail.com',
        password: '123456',
        status: false,
        createdAt: new Date()
    },
    {
        id: uuid(),
        name: 'Isaaac Castillo',
        email: 'isaacCastillo@gmail.com',
        password: '123456',
        status: true,
        createdAt: new Date()
    }
]