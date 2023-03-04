const { createConn, closeConn, database } = require('../../util/db/db')
const logger = require('../../util/logger')

const getDriver = async () => {
    const conn = await createConn()
    const [rows] = await conn.query(`SELECT * FROM ${database}.drivers`)
    closeConn(conn)
    return rows || []
}

module.exports = {
    getDriver
}
