import { Injectable } from '@nestjs/common';
import { Hero } from '@prisma/client';

import { HeroDTO } from './heroes.dto';
import { PrismaService } from '../_shared/infrastructure';

@Injectable()
export class HeroesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  private mapHeroToHeroDTO(hero: Hero): HeroDTO {
    return {
      id: hero.id,
      name: hero.name,
    };
  }

  async getAllHeroes(): Promise<Hero[]> {
    const heroes = await this.prismaService.hero.findMany();
    return heroes.map(this.mapHeroToHeroDTO);
  }
}
