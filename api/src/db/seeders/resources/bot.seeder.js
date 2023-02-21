const sqlString = require('sqlstring')

module.exports = {
  seed: async (queryRunner, count) => {
    const botPromises = []

    for (let i = 1; i <= count; i++) {
      bot = {
        id: i,
        name: `Bot ${i}`,
        avatar: `https://picsum.photos/seed/${i}/200/200`,
        sourceCode: `test()`,
        ranking: i
      }

      const keys = Object.keys(bot).join(', ')
      const values = sqlString.escape(Object.values(bot))

      botPromises.push(
        queryRunner.query(`INSERT INTO bots (${keys}) Values (${values})`)
      )
    }

    return await Promise.all(botPromises)
  }
}
