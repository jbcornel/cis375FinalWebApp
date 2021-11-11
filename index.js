const express = require('express');
const app = express();

app.listen(3000, ()=> console.log('listening'));
app.use(express.static('public'));



app.get('/', function (req, res) {
    res.send('index.html')
  })

  
app.get('/secondPage', function (req, res) {
    res.send('secondPage.html')
  })