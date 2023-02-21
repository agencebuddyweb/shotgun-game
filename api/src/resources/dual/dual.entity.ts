import {
  AfterLoad,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Bot } from '../bot/bot.entity'

@Entity({ name: 'duals' })
export class Dual {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  rounds: string

  @Column({ type: 'tinyint', default: 0 })
  challengerWin: boolean

  @ManyToOne(() => Bot, (bot) => bot.dualsAsChallenger)
  challenger: Bot

  @ManyToOne(() => Bot, (bot) => bot.dualsAsDefender)
  defender: Bot

  // Auto.
  @CreateDateColumn({ select: false })
  createdAt: Date

  @UpdateDateColumn({ select: false })
  updatedAt: Date

  // TODO: Parse rounds.
  // @AfterLoad()
  // parseRounds() {
  //   console.log(this.rounds)
  //   this.rounds = JSON.parse(this.rounds)
  // }
}
