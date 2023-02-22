import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Round } from '../../shared/interfaces/round.interface'
import { Bot } from '../bot/bot.entity'
import { Dual } from './dual.entity'
import { RoundService } from './round.service'

@Injectable()
export class DualService {
  constructor(
    @InjectRepository(Dual) private readonly dualRepository: Repository<Dual>,
    private readonly roundService: RoundService
  ) {}

  async createDual(challenger: Bot, defender: Bot): Promise<Dual> {
    const rounds: Round[] = this.roundService.executeRounds(
      challenger.sourceCode,
      defender.sourceCode
    )

    const dual: Dual = this.dualRepository.create({
      challenger,
      defender,
      challengerWin: rounds[rounds.length - 1].defender.isKilled,
      rounds: JSON.stringify(rounds)
    })

    return this.dualRepository.save(dual)
  }
}
