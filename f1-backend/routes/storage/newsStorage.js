const { createConn, closeConn, database } = require('../../util/db/db')
const logger = require('../../util/logger')

const getNews = async () => {
    const conn = await createConn()
    const [rows] = await conn.query(`SELECT * FROM ${database}.news`)
    closeConn(conn)
    return rows || []
}



module.exports = {
    getNews
}
