var express = require('express')
var router = express.Router()
const driverService = require('../service/driverService')

/* GET get news list. */
router.get('/getDriver', async (req, res, next) => {
  const result = await driverService.getDriverList()
  console.log(result)
  return res.send(result)
})

router.get('/getDriver/:id', async (req, res, next) => {
  console.log(req.params.id)
  const result = await driverService.getDriverById(req)
  console.log(result)
  return res.send(result)
})

module.exports = { router }
