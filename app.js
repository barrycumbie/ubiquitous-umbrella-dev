const express = require('express')
const app = express()

app.use(express.static('./public/'))

console.log('im on a node server change that and that tanad f, yo');

app.get('/', function (req, res) {
  // res.send('Hello Node from Ex on local dev box')
  res.sendFile('index.html');
})

app.listen(5000)
