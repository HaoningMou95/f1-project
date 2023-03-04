var express = require('express')
var router = express.Router()
const driverService = require('../service/driverService')

/* GET get news list. */
router.get('/getDriver', async (req, res, next) => {
  const result = await driverService.getDriverList()
  console.log('result'.result)
  

  return res.send(result)
  // res.render('index', { title: 'Express' })
})

module.exports = { router }
