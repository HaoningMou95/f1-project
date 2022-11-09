const log4js = require('log4js')

const init = () => {
  log4js.configure({
    appenders: {
      console: { type: 'stdout' },
      everything: { type: 'file', filename: './logs/events', pattern: 'yyyy-MM-dd.log', alwaysIncludePattern: true, backups: 365 }
    },
    categories: {
      default: { appenders: ['console', 'everything'], level: 'debug' }
    }
  })
  console.log('Logger initilized')

  return log4js.getLogger()
}

const logger = init()

module.exports = logger
