import { BaseModel } from './base.model';

export interface Coordinates {
    x: number;
    y: number;
    x2: number;
    y2: number;
}

export class Detection extends BaseModel {
    static tableName = 'detections';

    id: number;
    label: string;
    coordinates: Coordinates;
    confidence: number;

    $formatJson(json) {
        json = super.$formatJson(json);
        if (json.coordinates) {
            json.coordinates = JSON.parse(json.coordinates);
        }
        return json;
    }
}