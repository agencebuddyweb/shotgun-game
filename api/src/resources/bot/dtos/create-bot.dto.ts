import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateBotDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string

  @IsOptional()
  @IsString()
  readonly avatar: string

  @IsNotEmpty()
  @IsString()
  readonly sourceCode: string
}
