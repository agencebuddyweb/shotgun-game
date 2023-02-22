import { Controller, Post } from '@nestjs/common'
import { Bot } from '../bot/bot.entity'
import { BotService } from '../bot/bot.service'
import { Dual } from './dual.entity'
import { DualService } from './dual.service'

@Controller('duals')
export class DualController {
  constructor(
    private readonly dualService: DualService,
    private readonly botService: BotService
  ) {}
}
