const driverStorage = require('../storage/driverStorage')

const getDriverList = async () => {
  const result = await driverStorage.getDriver()
  return result
}

module.exports = { getDriverList }
