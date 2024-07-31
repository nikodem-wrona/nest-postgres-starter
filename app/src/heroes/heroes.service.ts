import { Injectable } from '@nestjs/common';

import { HeroDTO } from './heroes.dto';
import { HeroesRepository } from './heroes.repository';

@Injectable()
export class HeroesService {
  constructor(private readonly heroesRepository: HeroesRepository) {}

  async getAllHeroes(): Promise<HeroDTO[]> {
    return this.heroesRepository.getAllHeroes();
  }
}
