import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { InfrastructureModule } from './_shared/infrastructure';
import { HeroesModule } from './heroes';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        PORT: Joi.number().port(),
        DATABASE_URL: Joi.string().uri(),
      }),
    }),
    InfrastructureModule,
    HeroesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
