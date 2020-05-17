import { RolesBuilder } from 'nest-access-control';

export enum Roles {
    USER = 'USER',
    ADMIN = 'ADMIN',
}

export const roles: RolesBuilder = new RolesBuilder();

roles
    .grant(Roles.USER)
    .readAny('detection')
    .grant(Roles.ADMIN)
    .createAny('detection')