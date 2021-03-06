import { Injectable, Inject, ForbiddenException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'
import { ModelClass } from 'objection';
import { AuthToken } from 'src/database/models/token.model';
import { JwtService } from '@nestjs/jwt'
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { Roles } from 'src/app.roles';

@Injectable()
export class AuthService {
    constructor(
        @Inject('AuthToken') private authTokenClass: ModelClass<AuthToken>,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService) { }


    async validateUser(payload: any) {
        const token = await this.authTokenClass.query().findOne({ token: payload.tokenId })

        return token ? payload : false;
    }

    async login(params: LoginDto) {
        const username = this.configService.get('adminUsername');
        const password = this.configService.get('adminPassword');
        if (params.username !== username || params.password !== password) {
            throw new ForbiddenException;
        }

        const tokenId = uuidv4();
        const payload: any = { tokenId, roles: [Roles.ADMIN] };
        const token = this.jwtService.sign(payload)
        await this.authTokenClass.query().insert({ token: tokenId })
        return token
    }
}
