import { Controller, Get } from '@nestjs/common';

import { HeroDTO } from './heroes.dto';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get()
  async getAllHeroes(): Promise<HeroDTO[]> {
    return this.heroesService.getAllHeroes();
  }
}
