const newsStorage = require('../storage/newsStorage')

const getNewList = async () => {
  const result = await newsStorage.getNews()
  return result
}

module.exports = { getNewList }
