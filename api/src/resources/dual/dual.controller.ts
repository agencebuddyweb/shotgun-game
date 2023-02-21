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

  // TODO: remove that temporary method.
  @Post()
  async createDummyDual(): Promise<Dual> {
    const challenger: Bot = await this.botService.getBotById(1)
    const defender: Bot = await this.botService.getBotById(2)

    return this.dualService.createDual(challenger, defender)
  }
}
