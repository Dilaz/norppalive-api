import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ConfigService,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: process.env.JWT_SECRET || 'asd',
                signOptions: { expiresIn: '3650d' }
            })
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, ConfigService],
    exports: [PassportModule, AuthService]
})
export class AuthModule { }
