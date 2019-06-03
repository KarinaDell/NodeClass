var express = require('express');
var app = express();

var response = {error: "false", status: "200", message: "Todo bien"};


app.get('/', function (req, res){
    res.send(response);
});

app.get('/person/:id', function(req, res){
    if (req.params.id > 50) {
        response.error = false;
        response.status = 200;
        response.message = "Ok";
        res.send(response);
    }
       
    else {
        response.error = true;
        response.status = 400;
        response.message = "Error";
        res.send(response);
    }
    

});

app.listen(3000, function (){
    console.log('Puerto 3000');
});

