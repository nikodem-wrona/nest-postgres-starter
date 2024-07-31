import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class HeroDTO {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
