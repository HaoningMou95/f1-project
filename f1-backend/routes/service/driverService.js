const driverStorage = require('../storage/driverStorage')

const getDriverList = async () => {
  const result = await driverStorage.getDriver()
  return result
}

const getDriverById = async (req) => {
  const { id } = req.params
  const result = await driverStorage.findDriverById(id)
  return result
}



module.exports = { getDriverList, getDriverById }
