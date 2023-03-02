const scheduleStorage = require('../storage/scheduleStorage')

const getFullSchedule = async () => {
  const result = await scheduleStorage.getSchedule()
  return result
}

module.exports = { getFullSchedule }
