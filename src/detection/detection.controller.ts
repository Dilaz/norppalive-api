import { Controller, Get, Post, Body } from '@nestjs/common';
import { DetectionService } from './detection.service';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { AddDetectionDto } from './dto/detection.dto';
import { Detection } from 'src/database/models/detection.model';
import { UseRoles } from 'nest-access-control';

@Controller('detection')
export class DetectionController {
    constructor(private readonly detectionService: DetectionService) { }

    @Get('latestDetections')
    async getLatestDetections(): Promise<Detection[]> {
        return this.detectionService.getLatestDetections();
    }

    @ApiExcludeEndpoint()
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
