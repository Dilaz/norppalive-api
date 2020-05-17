require("ts-node/register");
require("dotenv").config();


module.exports = {
  client: 'mysql',
  connection: {
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  },
  migrations: {
    tableName: 'migrations',
    directory: `${__dirname}/src/database/migrations`,
  },
  seeds: {
    directory: `${__dirname}/src/database/seeds`
  },
  charset: 'utf8mb4'
}
