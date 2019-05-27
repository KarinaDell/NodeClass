var express = require('express');
var app = express();
var mongoose = require('mongoose');

//Conexión a la BD
mongoose.connect('mongodb://root:root123@ds147125.mlab.com:47125/addressbookgac');

//Se crea el esquema de persona
var Schema = mongoose.Schema;

var personSchema = new Schema ({
    firstname: String,
    lastname: String,
    address: String
});

//Se crea llena esquema de Persona

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