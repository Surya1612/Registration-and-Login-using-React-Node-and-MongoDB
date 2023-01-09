var express=require('express');
var userRouter=express.Router();
var bodyparser=require('body-parser');
const User=require('../model/user');
const crypto=require('crypto')
const config=require('../config')
const util=require('../util')

userRouter.use(bodyparser.json());

let iv = "121212121212";
let secret= '5555555555555555231231321313aaaf';

userRouter.post('/signup',(req,res)=>{

   let hashPassword= util.getEncryptedToken(req.body.password);
    let user = new User({username:req.body.username,password:hashPassword,email:req.body.email})
     user.save()
    .then((user)=>{
        res.send({status:'success',message:"Register Successfully"})
       })
    .catch((err)=>{
        res.send({err:err})
       })
})

userRouter.post('/login',(req,res)=>{

    User.findOne({username:req.body.username})
    .then(async(user,err)=>{
        console.log(user)
        if(user === null){
          res.status=400;
          res.send({status:'failure',message:'User Not found'});
        }else{
            let decryptedData=await util.decrypt(user.password);
            console.log(decryptedData);
            console.log(req.body.password)
             if(decryptedData === req.body.password){

                res.status=200;
                res.send({status:'success',message:'Logged in Successfully'})
             }else{
                res.status=400;
                res.send({status:'failure',message:'Password not matched'})
             }
        }
    })
    
    .catch((err)=>{
        res.send(err);
    })

})

module.exports=userRouter;