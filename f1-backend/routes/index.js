var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  return res.send('Hello World')
  // res.render('index', { title: 'Express' })
})

router.all('/*', (req, res, next) => {
  next()
})

// router.get('/getNews', function (req, res, next) {
//   return res.send('Hello World News')
//   // res.render('index', { title: 'Express' })
// })

module.exports = { router }
