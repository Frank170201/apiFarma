/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SeedModule } from './seed/seed.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        EnvConfiguration
      ],
      validationSchema: JoiValidationSchema,
    }),
    // MongooseModule.forRoot(process.env.MONGODB),
    UsersModule,
    SeedModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {

}
