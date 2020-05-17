import { Module } from '@nestjs/common';
import { DetectionController } from './detection.controller';
import { DetectionService } from './detection.service';
import { AccessControlModule } from 'nest-access-control';
import { roles } from 'src/app.roles';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        AccessControlModule.forRoles(roles),
        ConfigModule,
    ],
    controllers: [DetectionController],
    providers: [DetectionService],
    exports: [DetectionService],
})
export class DetectionModule { }
