import { Module } from '@nestjs/common';

import { HeroesController } from './heroes.controller';
import { HeroesRepository } from './heroes.repository';
import { HeroesService } from './heroes.service';

@Module({
  imports: [],
  controllers: [HeroesController],
  providers: [HeroesService, HeroesRepository],
})
export class HeroesModule {}
