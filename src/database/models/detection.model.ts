import { BaseModel } from './base.model';
import { ApiProperty } from '@nestjs/swagger';

export interface Coordinates {
    x: number;
    y: number;
    x2: number;
    y2: number;
}

export class Detection extends BaseModel {
    static tableName = 'detections';

    id: number;

    @ApiProperty({
        example: 'norppa'
    })
    label: string;

    @ApiProperty({
        description: 'Detection box coordinates. The input image size is 1280x720 and coordinates are relative to that.',
        example: {
            x: 240,
            y: 318,
            x2: 883,
            y2: 680
        }
    })
    coordinates: Coordinates;

    @ApiProperty({
        description: 'Neural network confidence for the detection',
        example: 79
    })
    confidence: number;

    $formatJson(json) {
        json = super.$formatJson(json);
        if (json.coordinates) {
            json.coordinates = JSON.parse(json.coordinates);
        }
        return json;
    }
}