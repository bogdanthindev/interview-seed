const app = require('express')()

app.get('/', function(req, res) {
  res.send('Hello World! bine haw')
})

app.listen(3001, function() {
  console.log('Example app listening on port 3001!!!')
})
