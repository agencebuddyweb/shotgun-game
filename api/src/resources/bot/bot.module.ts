import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BotController } from './bot.controller'
import { Bot } from './bot.entity'
import { BotService } from './bot.service'

@Module({
  imports: [TypeOrmModule.forFeature([Bot])],
  controllers: [BotController],
  providers: [BotService]
})
export class BotModule {}
