const sqlString = require('sqlstring')

module.exports = {
  seed: async (queryRunner, count, botCount) => {
    const dualPromises = []

    for (let i = 1; i <= count; i++) {
      dual = {
        id: i,
        rounds: '[]',
        challengerWin: Math.floor(Math.random() * 2),
        challengerId: Math.floor(Math.random() * botCount) + 1,
        defenderId: Math.floor(Math.random() * botCount) + 1
      }

      const keys = Object.keys(dual).join(', ')
      const values = sqlString.escape(Object.values(dual))

      dualPromises.push(
        queryRunner.query(`INSERT INTO duals (${keys}) Values (${values})`)
      )
    }

    return await Promise.all(dualPromises)
  }
}
