const {Schema,model} = require('mongoose')

const classSchema = Schema({
image:{
    type:String,
    required:true
},
category:{
    type:String,
    required:true
},
classname:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
city:{
    type:String,
    required:true
},
fees:{
    type:Number,
    required:true
},
duration:{
    type:Number,
    required:true
},
vacancy:{
    type:Number,
    default:1

}});

module.exports = model('Class',classSchema);