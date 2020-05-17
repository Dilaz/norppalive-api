import { Global, Module } from '@nestjs/common';
import { knexSnakeCaseMappers } from 'objection';
import { Detection } from './models/detection.model';
import { AuthToken } from './models/token.model';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BaseModel } from './models/base.model';
import * as Knex from 'knex';

const models = [Detection, AuthToken];

const modelProviders = models.map(model => {
    return {
        provide: model.name,
        useValue: model
    };
});

const providers = [
    ...modelProviders,
];

@Global()
@Module({
    imports: [
        ConfigModule,
        ObjectionModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory(config: ConfigService) {
                return {
                    Model: BaseModel,
                    config: {
                        ...config.get<Knex.Config>('database'),
                        ...knexSnakeCaseMappers(),
                    },
                };
            },
        }),
    ],
    providers: [ObjectionModule, ...providers],
    exports: [ObjectionModule, ...providers]
})
export class DatabaseModule { }