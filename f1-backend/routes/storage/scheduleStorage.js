const { createConn, closeConn, database } = require('../../util/db/db')
const logger = require('../../util/logger')

const getSchedule = async () => {
    const conn = await createConn()
    const [rows] = await conn.query(`SELECT * FROM ${database}.races`)
    closeConn(conn)
    return rows || []
}

module.exports = {
    getSchedule
}
