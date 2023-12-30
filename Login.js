import React, { useState } from 'react'
import Base from './Base'
import { Button,Card, CardBody,Form, CardHeader, Col, Container, Row, FormGroup, Label, Input } from 'reactstrap'
import { toast } from 'react-toastify'
import { loginUser } from '../Services/user-service'
import { doLogin } from '../auth';
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';


const Login = () => {

  const navigate=useNavigate();

  const [loginDetail, setLoginDetail]=useState({
    username:'',
    password:''
  });

  const handleChange=(event,field)=>{

   let actualValue=event.target.value
   setLoginDetail({
    ...loginDetail,
    [field]:actualValue
   });
  };

const handleReset =()=>{
  setLoginDetail({
    username:'',
    password:''
  });
};

  const handleFormSubmit=(event)=>{
   event.preventDefault();
   console.log(loginDetail);

   //validation
   if(loginDetail.username.trim()=='' || loginDetail.password.trim()==''){
  //   swal({
  //     title:"Username or Password is required !! ",
  //     icon:"error",
  //     buttons:false,
  //     timer:2000
  // })
    toast.error("Username or Password is required !!");
   // return;
   };

   //submit the data to server to generate token
   loginUser(loginDetail).then((data)=>{
    console.log(data)

    //save the data to localstorage
    doLogin(data,()=>{
      console.log("login detail save to local storage");

      //redirect to user page after login
      navigate("/user/form")
    })


   }).catch(error=>{
    console.log(error);
    if(error.response.status==401 || error.response.status==404)
    {
      toast.error(error.response.data.message)
    }else{
    toast.error("somthing went wrong")
    }
   })

  };



  return (
 <Base>
<Container className=' bg-yellow-50 pt-5 pb-72'>
<Row >
  <Col sm={{size:6, offset:3}}>
    <Card color='warning' outline>
      <CardHeader className='p-2 text-center text-lg'>
        Login
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleFormSubmit}>
          <FormGroup>
            {/* email */}
            <Label for="email">Enter Email</Label>
            <Input
            type='text'
            id='email'
            value={loginDetail.username}
            onChange={(e)=>handleChange(e,'username')}
            
            />
              {/* email */}
              <Label for="email">Enter Password</Label>
            <Input
            type='password'
            id='password'
            value={loginDetail.password}
            onChange={(e)=>handleChange(e,'password')}
            />
          </FormGroup>
          <Container className='text-center ' >
          <Button color='success'>
            Login
          </Button>
          <Button onClick={handleReset} color='danger'type='reset' className='ms-2'>
            Reset
          </Button>
        </Container>

        </Form>
      </CardBody>
    </Card>

  </Col>
</Row>
</Container>
 </Base>
  )
}

export default Login