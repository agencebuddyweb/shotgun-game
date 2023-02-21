require('dotenv').config()

const typeorm = require('typeorm')

const botSeeder = require('./resources/bot.seeder')
// const userSeeder = require('./resources/user.seeder')

;(async () => {
  const botCount = 40

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

  await botSeeder.seed(queryRunner, botCount)

  await connection.close()
})()
