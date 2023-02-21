import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Not, Repository } from 'typeorm'
import { Dual } from '../dual/dual.entity'

import { DualService } from '../dual/dual.service'
import { Bot } from './bot.entity'
import { CreateBotDto } from './dtos/create-bot.dto'

@Injectable()
export class BotService {
  constructor(
    @InjectRepository(Bot) private readonly botRepository: Repository<Bot>,
    private readonly dualService: DualService
  ) {}

  async getBots() {
    return this.botRepository.find({
      order: {
        ranking: 'ASC'
      },
      relations: ['dualsAsChallenger', 'dualsAsDefender']
    })
  }

  async getBotById(id: number) {
    return this.botRepository.findOne({
      where: { id },
      relations: [
        'dualsAsChallenger',
        'dualsAsDefender',
        'dualsAsChallenger.defender',
        'dualsAsDefender.challenger'
      ]
    })
  }

  async createBot(botDto: CreateBotDto): Promise<Bot> {
    const bot: Bot = await this.botRepository.save(
      this.botRepository.create(botDto)
    )

    const otherBots: Bot[] = await this.botRepository.find({
      where: { id: Not(bot.id) },
      order: {
        ranking: 'DESC'
      }
    })

    const campaignDuals: Dual[] = []

    for (const otherBot of otherBots) {
      const dual: Dual = await this.dualService.createDual(bot, otherBot)
      console.log(dual.challengerWin, otherBot.ranking)

      campaignDuals.push(dual)

      if (dual.challengerWin) {
        otherBot.ranking++
        await this.botRepository.save(otherBot)
      } else {
        bot.ranking = otherBot.ranking + 1
        await this.botRepository.save(bot)

        break
      }
    }

    return bot
  }
}
