import { RolesBuilder } from 'nest-access-control';

export enum Roles {
    ADMIN = 'ADMIN',
}

export const roles: RolesBuilder = new RolesBuilder();

roles
    .grant(Roles.ADMIN)
    .createAny('detection')