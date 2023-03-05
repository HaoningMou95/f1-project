const { createConn, closeConn, database } = require('../../util/db/db')
const logger = require('../../util/logger')

const getDriver = async () => {
    const conn = await createConn()
    const [rows] = await conn.query(`SELECT * FROM ${database}.drivers`)
    closeConn(conn)
    return rows || []
}

const findDriverById = async (id) => {
    const conn = await createConn()
    const [rows] = await conn.query(`SELECT * FROM ${database}.drivers where id = ?`, [id])
    console.log(rows)
    closeConn(conn)
    return rows || []
}

module.exports = {
    getDriver, 
    findDriverById
}
