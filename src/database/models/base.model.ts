import { Model } from 'objection';
import moment = require('moment');

export class BaseModel extends Model {
    readonly id: number;

    created_at: string;
    updated_at: string;

    $beforeInsert() {
        this.created_at = moment().utc().format('YYYY-MM-DD HH:mm:ss');
    }

    $beforeUpdate() {
        this.updated_at = moment().utc().format('YYYY-MM-DD HH:mm:ss');
    }
}