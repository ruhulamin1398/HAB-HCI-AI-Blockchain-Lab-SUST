const mongoose = require("mongoose");
let uniqueValidator = require('mongoose-unique-validator');
const userSchema= mongoose.Schema({
    name:{
        type: "string",
        require: "true"
    },
    username:{
        type: "string",
        require: "true",
        unique: "true",
    },
    batch: {
        type: "number",
        require: "true",

    },
    roll:{
        type: "number",
        require: "true",
        unique: "true",
    },
    registration:{
        type: "number",
        require: "true",
        unique: "true",
    },

    email:{
        type: "string",
        require: "true",
        unique: "true"
    },
    phone:{
        type: "number",
        require: "true"
    },

    password:{
        type:"string",
        require: "true"
    }
    // image:{
    //     type: 'Buffer'
    // }
});
userSchema.plugin(uniqueValidator);
module.exports=userSchema;