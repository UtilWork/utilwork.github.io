const path = require('path');
const express = require('express')
const app = express()

// 设置静态资源根目录后，页面上直接访问静态资源即可：http://localhost:3000/index.html
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', function (req, res) {
  res.send('hello world')
})
app.get('/index2', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
})

app.listen(3000)