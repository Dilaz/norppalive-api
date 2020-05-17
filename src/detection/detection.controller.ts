import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { DetectionService } from './detection.service';
import { ApiExcludeEndpoint, ApiBearerAuth } from '@nestjs/swagger';
import { AddDetectionDto } from './dto/detection.dto';
import { Detection } from 'src/database/models/detection.model';
import { UseRoles, ACGuard } from 'nest-access-control';
import { AuthGuard } from '@nestjs/passport';

@Controller('detection')
export class DetectionController {
    constructor(private readonly detectionService: DetectionService) { }

    @Get('latestDetections')
    async getLatestDetections(): Promise<Detection[]> {
        return this.detectionService.getLatestDetections();
    }

    @ApiExcludeEndpoint()
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'), ACGuard)
    @UseRoles({
        resource: 'detection',
        action: 'create',
        possession: 'any',
    })
    @Post('addDetection')
    async addDetection(@Body() params: AddDetectionDto) {
        return this.detectionService.addDetection(params);
    }
}
