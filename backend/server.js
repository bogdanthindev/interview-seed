const app = require('express')()
const mongo = require('mongodb').MongoClient

const candidate = ''
const url = `mongodb://localhost:27017/${candidate}`

mongo.connect(url, (err, db) => {
  console.log('connected to DB.')

  app.get('/', function(req, res) {
    res.send('Hello World!')
  })

  app.listen(3001, function() {
    console.log('Example app listening on port 3001!')
  })
})

