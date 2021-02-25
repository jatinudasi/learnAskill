const {Schema,model} =  require('mongoose');

const classownerP =  new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
});

module.exports =model('ClassownerP',classownerP);