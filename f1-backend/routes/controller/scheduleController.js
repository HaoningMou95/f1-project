var express = require('express')
var router = express.Router()
const scheduleService = require('../service/scheduleService')

/* GET get news list. */
router.get('/getSchedule', async (req, res, next) => {
  const result = await scheduleService.getFullSchedule()
  console.log('result'.result)
  

  return res.send(result)
  // res.render('index', { title: 'Express' })
})

module.exports = { router }
