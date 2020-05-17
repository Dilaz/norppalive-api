import { Injectable, Inject } from '@nestjs/common';
import { Detection } from 'src/database/models/detection.model';
import { ModelClass, val, ref } from 'objection';
import * as moment from 'moment';
import { AddDetectionDto } from './dto/detection.dto';
import { ConfigService } from '@nestjs/config';
import { Coordinates } from '../database/models/detection.model'

@Injectable()
export class DetectionService {
    constructor(@Inject('Detection') private detectionClass: ModelClass<Detection>,
        private readonly configService: ConfigService) { }

    async getLatestDetections() {
        const detectionTimeLimit = moment().utc().subtract(this.configService.get('latestDetectionTime'), 'minutes');
        return this.detectionClass.query()
            .select('label', 'confidence', 'coordinates', 'created_at')
            .where('created_at', '<', detectionTimeLimit.toDate())
            .orderBy('created_at', 'DESC');
    }

    async addDetection(params: AddDetectionDto) {
        return this.detectionClass.query().insert({
            label: params.label,
            confidence: params.confidence,
            coordinates: val({
                x: params.x,
                y: params.y,
                x2: params.x2,
                y2: params.y2,
            })
        });
    }
}
