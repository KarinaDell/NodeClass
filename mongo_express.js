var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://root:root123@ds147125.mlab.com:47125/addressbookgac');


var Schema = mongoose.Schema;

var personSchema = new Schema ({
    firstname: String,
    lastname: String,
    address: String
});

//Se llena esquema de Persona

var Person = mongoose.model('Person', personSchema);

var john = Person ({
    firstname: 'Karina',
    lastname: 'Delgado',
    address: '555 Colima'
});

app.get('/person/:name', function(req, res){
    res.send('<html><head></head><body><h1>Person: ' 
    + req.params.name + '</h1></body></html>');
});

app.get('/api', function(req, res){
    res.json({firstname: 'John', lastname: 'Doe'});
});

john.save(function(err){
    if (err) throw err;

    console.log('person saved!');
});


app.listen(port);
