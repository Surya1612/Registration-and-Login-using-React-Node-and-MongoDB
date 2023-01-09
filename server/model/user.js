const moongose=require('mongoose');
const Schema =moongose.Schema;

var userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
       type:String,
       required:true
    },
    email:{
      type:String,
       required:true
    }
},{
    timestamps:true
})

var Users=moongose.model('User',userSchema);
module.exports=Users;