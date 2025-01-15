/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SeedModule } from './seed/seed.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ UsersModule,
    // MongooseModule.forRoot('mongodb://localhost:27017/apiFarma', ),
    SeedModule,
    CommonModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
