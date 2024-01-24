//importing libarary
const mango = require("mongoose")

//to selecting schema
const Schema = mango.Schema

//schema details

const newEmploye = new Schema({
    empName:{
        type:String,
        required:true    
    },
    empDesignation:{
        type:String,
        required:true
    },
    empEmail:{
        type:String
    },
    empPhoneNumber:{
        type:Number,
        required:true
    },
    empCity:{
        type:String
    }
})


const createemploye = mango.model("Employelist",newEmploye)
module.exports = createemploye