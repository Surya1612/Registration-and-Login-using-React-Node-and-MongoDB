var express=require('express');
var userRouter=require('./router/userRouter')
const moongose=require('mongoose');
const cors=require('cors')

var app=express();
app.use(cors())
const port=6060;

var mongoUrl="mongodb://0.0.0.0:27017/Task1";
const connect=moongose.connect(mongoUrl);

connect.then(()=>{console.log(`connected to the server`)},
(err=>{console.log(err)}))


app.use('/user',userRouter);

app.listen(port,()=>{console.log(`successfully running on port number ${port}`)});