const express = require('express')  
const app = express()  
app.get('/api/:operation/:num1/:num2', function (req, res) {  
  let operation = req.params.operation;
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);

  let result = num1 + num2;
  res.send(result.toString());  
})  
app.listen(3000) 