require('dotenv').config()

const typeorm = require('typeorm')

const botSeeder = require('./resources/bot.seeder')
const dualSeeder = require('./resources/dual.seeder')

;(async () => {
  const botCount = 40
  const dualCount = 100

  // Create connection
  const connection = await typeorm.createConnection({
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  })

  // Truncate tables
  const queryRunner = connection.createQueryRunner()

  await queryRunner.query('DELETE FROM duals')
  await queryRunner.query('DELETE FROM bots')

  // Seed tables

  await botSeeder.seed(queryRunner, botCount)
  await dualSeeder.seed(queryRunner, dualCount, botCount)

  await connection.close()
})()
