const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('config')
const logger = require('./util/logger')
const homepage = require('./routes/index')
const news = require('./routes/controller/newsController')

const startServer = (host, port) => {
  const app = express()

  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
  app.use(bodyParser.json({ limit: '5mb' }))

  app.use(cors())
  app.use((req, res, next) => {
    logger.info(req.url)
    logger.debug(req.query, req.body)
    next()
  })
  // routers
  app.use('/', homepage.router)
  app.use('/news', news.router)

  app.listen(port, host, () => {
    // logger.info(`Server runs as ${config.env} mode in port: ${port}`)
    logger.info(`Server runs as ${config.env} mode in port: ${port}`)
  })
}

main = async () => {
  startServer(config.host, config.port)
}

main()
