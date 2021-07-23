const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PersonClient = new Schema({
    situation:{
        type: String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    cpf:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    cep:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    adressNumber:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    openingHours:{
        type: String,
        required:true
    },
    attendanceDay:{
        type:Date,
        required:true
    },
    vehicles:[{
        type:String,
        required:true
    }]
})
personsClients = mongoose.model('Cliente',PersonClient);