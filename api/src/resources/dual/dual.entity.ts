import {
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

  @Column()
  name: string

  @Column({ nullable: true })
  avatar: string

  @Column('text')
  sourceCode: string

  @Column('int', { default: 0 })
  ranking: number

  @ManyToOne(() => Bot, (bot) => bot.dualsAsChallenger)
  challenger: Bot

  @ManyToOne(() => Bot, (bot) => bot.dualsAsDefender)
  defender: Bot

  // Auto.
  @CreateDateColumn({ select: false })
  createdAt: Date

  @UpdateDateColumn({ select: false })
  updatedAt: Date
}
