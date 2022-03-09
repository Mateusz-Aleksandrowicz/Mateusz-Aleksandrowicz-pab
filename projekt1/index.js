var express = require('express');
var app = express();
app.get('/api/:operation/:num1/:num2', function (req, res) {
    var operation = req.params.operation;
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    var resutl = num1 + num2;
    res.send(resutl.toString());
});
app.listen(3000);
