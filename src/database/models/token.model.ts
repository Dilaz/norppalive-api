import { BaseModel } from './base.model';

export class AuthToken extends BaseModel {
    static tableName = 'auth_tokens';
    id: number;
    token: string;
    expires_at: string;
}