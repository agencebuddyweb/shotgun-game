import { Module } from '@nestjs/common'
import { DualModule } from './resources/dual/dual.module'
import { BotModule } from './resources/bot/bot.module'
import { TypeOrmModule } from '@nestjs/typeorm'

require('dotenv').config()

@Module({
  imports: [
    DualModule,
    BotModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [`${__dirname}/**/**.entity{.ts,.js}`],
      migrations: [`${__dirname}/database/migrations/*{.ts,.js}`],
      synchronize: true
    })
  ]
})
export class AppModule {}
