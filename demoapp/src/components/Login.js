import React,{useState} from 'react'
import axios from 'axios';
import {Form,Button,Card} from 'react-bootstrap'
import '../style/UserStyle.css'
import {useNavigate} from "react-router-dom";

export default function Login() {

const navigate=useNavigate();
const[username,setUsername]=useState('');
const[password,setPassword]=useState('');


const handleReset=()=>{
    setUsername('');
    setPassword('');
   }

const handleSubmit=(e)=>{
e.preventDefault();

var header={
    'content-type': 'application/json',
}

axios.post('http://localhost:6060/user/login',{
    username:username,
    password:password
},{header})
.then((res,err)=>{
  if(res.data.status === "success"){
    console.log(res.data);
    handleReset();
  }
  else{
    console.log(res.data);
  }
})
.catch((err)=>{
    console.log(err);
})
}

const handleUsername=(e)=>{
   setUsername(e.target.value);
}

const handlePassword=(e)=>{
    setPassword(e.target.value);
}

  return (
<div  className='main' style={{'minHeight': '-webkit-fill-available'}} >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12  col-md-6 '>
        <Card className='card' >

        <Card.Header>
          <h4 className='card-title text-center'>Sign in</h4>
        </Card.Header>

        <Card.Body style={{'textAlign':'-webkit-center'}}>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="form-group  mb-3 mt-3 ">
            <Form.Control type="text"
            className=' form-control form-control'
            style={{color:'black',fontWeight:'bold'}}
             name=""
             id="username"
             value={username} 
             onChange={handleUsername} 
             placeholder='Username'/>
             </Form.Group>

           <Form.Group className="mb-3">
            <Form.Control type="password"
             style={{color:'black',fontWeight:'bold'}}
            className=''
             name="" 
             id="password" 
             onChange={handlePassword}
             value={password}
             placeholder='Password'/>
             </Form.Group>

              <Button  type='submit' className='btn mb-3' >Login</Button>
              {/* <Button  type='submit' className=' mb-3' >Login</Button> */}
          </Form>
         {/* <p className='btn-1'>Not Registered? <a className='span' href='/signup'>Create an account</a></p> */}
        </Card.Body>
        </Card>
       </div>
     </div>
  </div>
 </div>
  )
}
