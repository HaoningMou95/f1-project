const mysql2 = require('mysql2/promise')
const dbConfig = require('config').mysql

const database = dbConfig.database

const createConn = async () => {
  const config = {
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
  }
  const conn = await mysql2.createConnection(config)
  return conn
}

const closeConn = (conn) => {
  try {
    conn.end()
  } catch (error) {
    //
  }
}

module.exports = {
  createConn,
  closeConn,
  database,
}