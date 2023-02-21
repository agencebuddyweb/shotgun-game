import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Dual } from '../dual/dual.entity'

@Entity({ name: 'bots' })
export class Bot {
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

  @OneToMany(() => Dual, (dual) => dual.challenger)
  dualsAsChallenger: Dual[]

  @OneToMany(() => Dual, (dual) => dual.defender)
  dualsAsDefender: Dual[]

  // Auto.
  @CreateDateColumn({ select: false })
  createdAt: Date

  @UpdateDateColumn({ select: false })
  updatedAt: Date
}
