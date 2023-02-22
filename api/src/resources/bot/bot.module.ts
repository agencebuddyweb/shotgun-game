import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Dual } from '../dual/dual.entity'

import { DualService } from '../dual/dual.service'
import { RoundService } from '../dual/round.service'
import { BotController } from './bot.controller'
import { Bot } from './bot.entity'
import { BotService } from './bot.service'

@Module({
  imports: [TypeOrmModule.forFeature([Bot, Dual])],
  controllers: [BotController],
  providers: [BotService, DualService, RoundService]
})
export class BotModule {}
