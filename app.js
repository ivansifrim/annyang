const express = require('express');
const app = express();

app.set('view engine', 'ejs'); 

app.get('/', function(req, res) {  
  res.render('index', { title: 'The index page!' })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))