var express = require('express');
var app = express();
var mongoose = require('mongoose');
//var port = process.env.PORT || 3000;

//Conexión a la BD
mongoose.connect('mongodb://root:root123@ds147125.mlab.com:47125/addressbookgac');

//Se crea el esquema de persona
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

//Arroja error o salva el registro
john.save(function(err){
    if (err) throw err;

    console.log('person saved!');
});

/**Person.find({}, function(err, users){
    if(err) throw err:
    console.log(users);
});
app.listen(port);**/