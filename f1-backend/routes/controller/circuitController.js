var express = require('express')
var router = express.Router()
const newsService = require('../service/newsService')

/* GET get news list. */
router.get('/getNews', async (req, res, next) => {
  const result = await newsService.getNewList()
  console.log('result'.result)
  

  return res.send(result)
  // res.render('index', { title: 'Express' })
})

module.exports = { router }
