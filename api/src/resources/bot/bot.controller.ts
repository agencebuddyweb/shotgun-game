import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post
} from '@nestjs/common'

import { Bot } from './bot.entity'
import { BotService } from './bot.service'
import { CreateBotDto } from './dtos/create-bot.dto'

@Controller('bots')
export class BotController {
  constructor(private readonly botService: BotService) {}

  @Get()
  async getBots(): Promise<Bot[]> {
    return this.botService.getBots()
  }

  @Get('/:id')
  async getBotById(@Param('id', ParseIntPipe) id: number): Promise<Bot> {
    return this.botService.getBotById(id)
  }

  @Post()
  async createBot(
    @Body()
    botDto: CreateBotDto
  ): Promise<Bot> {
    return this.botService.createBot(botDto)
  }
}
