import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Bot } from '../bot/bot.entity'
import { BotService } from '../bot/bot.service'
import { DualController } from './dual.controller'
import { Dual } from './dual.entity'
import { DualService } from './dual.service'
import { RoundService } from './round.service'

@Module({
  imports: [TypeOrmModule.forFeature([Dual, Bot])],
  controllers: [DualController],
  providers: [DualService, BotService, RoundService]
})
export class DualModule {}
