import React ,{useState} from 'react';
import axios from 'axios';
import {Form,Button,Card} from 'react-bootstrap'
import '../style/UserStyle.css'

export default function Register() {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');

    const handleReset=()=>{
     setUsername('');
     setPassword('');
     setEmail('');
    }

   const handleSubmit=(e)=>{
     e.preventDefault();
     var data = {
      Headers:{
      'content-type': 'application/json',
      }
  }
     axios.post('http://localhost:6060/user/signup',{
      username:username,
      password:password,
      email:email
     },{data})
     .then((res)=>{
      console.log(res.data);
      if(res.data.status === "success"){
        handleReset();
      }
     })
     .catch((err)=>{console.log(err)})
    }

    const handleUsername = (e) => {
      setUsername(e.target.value);
      };

    const handlePassword = (e) => {
        setPassword(e.target.value);
     };

    const handleEmail = (e) => {
          setEmail(e.target.value);
     };
  
  
  return (
    <div className='main' style={{'minHeight': '-webkit-fill-available'}}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12  col-md-6 '>
        <Card className='card' >

        <Card.Header>
          <h4 className='card-title text-center'>Sign up</h4>
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

           <Form.Group className="mb-3" >
            <Form.Control type="email" 
             style={{color:'black',fontWeight:'bold'}}
            className=''
             name=""
             id="email"
             onChange={handleEmail}
             value={email} 
             placeholder=' Email'/>   
             </Form.Group>
              <Button  type='submit' className='btn mb-3' >Signup</Button>
              {/* <Button  type='submit' className=' mb-3' >Login</Button> */}
          </Form>
           {/* <p className='btn-1'>Already have an account? <a className='span' href='/login' >Login</a></p> */}
        </Card.Body>
        </Card>
       </div>
     </div>
  </div>
 </div>

  )
}
