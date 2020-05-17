import { Model } from 'objection';
import moment = require('moment');
import { ApiProperty } from '@nestjs/swagger';

export class BaseModel extends Model {
    readonly id: number;

    @ApiProperty({
        description: 'When the detection was made',
        example: '2020-05-17T11:59:12.000Z'
    })
    created_at: string;
    updated_at: string;

    $beforeInsert() {
        this.created_at = moment().utc().format('YYYY-MM-DD HH:mm:ss');
    }

    $beforeUpdate() {
        this.updated_at = moment().utc().format('YYYY-MM-DD HH:mm:ss');
    }
}