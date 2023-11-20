const mongoose = require("mongoose");
let uniqueValidator = require('mongoose-unique-validator');
const UpoladSchema= mongoose.Schema({
  
    date:{
        type: "string",
        require: "true"
        
    },
    from:{
        type: "string",
        require: "true"
    },
    to:{
        type: "string",
        require: "true"
    },
    title:{
        type: "string",
        require: "true"
    },
    authors:{
        type: "string",
        require: "true"
    },
   
    File:{
       type: 'Buffer',
       require: "true",
       unique: "true",

    }
});
UpoladSchema.plugin(uniqueValidator);
module.exports=UpoladSchema;