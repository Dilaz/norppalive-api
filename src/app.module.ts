import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { DetectionModule } from './detection/detection.module';
import { ConfigModule } from '@nestjs/config';
import config from '../config';
import { ObjectionModule } from '@willsoto/nestjs-objection';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    DatabaseModule,
    AuthModule,
    DetectionModule,
  ],
})
export class AppModule { }
