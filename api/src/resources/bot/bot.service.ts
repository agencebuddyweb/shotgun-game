import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Bot } from './bot.entity'
import { CreateBotDto } from './dtos/create-bot.dto'

@Injectable()
export class BotService {
  constructor(
    @InjectRepository(Bot) private readonly botRepository: Repository<Bot>
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
      relations: ['dualsAsChallenger', 'dualsAsDefender']
    })
  }

  async createBot(botDto: CreateBotDto): Promise<Bot> {
    const bot: Bot = await this.botRepository.save(
      this.botRepository.create(botDto)
    )

    // TODO: Start a campaign for the new bot.

    return bot
  }
}
