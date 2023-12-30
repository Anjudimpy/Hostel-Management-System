import React, { useEffect, useState } from 'react'
import Base from './Base'
import { signUp } from '../Services/user-service';
import {toast} from 'react-toastify'
import swal from 'sweetalert';
import { Button, Card, CardBody, CardHeader, Col, Container,Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';

const Sign = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);
 
//reseting form
  const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    about:''
  })

  //submit form
  const submitForm=(event)=>{
  event.preventDefault()
  setIsSubmitted(true);
  if(error.isError){
   toast.error("Form data is invaild !!");
    setError({...error,isError:false})
    return;
  }

  //call server api for sending data
if(data.password===data.about){
  signUp(data).then((resp)=>{
 toast.success("User is registerd successfully !!")
 resetData();
  }).catch((error)=>{
    console.log(error)
    console.log("Error log")

    //handle error 
    setError({
      errors:error,
      isError:true
    })
  })
}
  }  
  const [error, setError]=useState({

    errors:{},
    isError:false

  })

  const handleChange=(event,property)=>{
    //dynimc setting the value
    setData({...data,[property]:event.target.value});
  }

  const resetData=()=>{
    setData({
      name:'',
      email:'',
      password:'',
      about:''
    });
  }

  return (
   <Base>
    <Container className=' bg-yellow-50 pt-4 pb-40'>
       <Row>
        {/* {JSON.stringify(data)} */}
        <Col sm={{size:6, offset:3}}>
        <Card color='warning' outline>
<CardHeader className='p-2 text-center text-lg'>
  Fill Information to Register
</CardHeader>
     
    <CardBody>
      <Form onSubmit={submitForm}>
        <FormGroup>
 {/* name */}
          <Label for="name">Enter Name</Label>
          <Input 
          type='text'
          placeholder='Enter Name'
          id='name'
          onChange={(e)=>handleChange(e,'name')}
          value={data.name}
          invalid={isSubmitted && data.name.trim() === ''}
      />
       <FormFeedback>
        {isSubmitted && data.name.trim() === '' && 'Name cannot be empty'}
      </FormFeedback>
  
 {/*email */}
          <Label for="email">Enter Email</Label>
          <Input
          type='text'
          placeholder='Enter Email'
          id='email'
          onChange={(e)=>handleChange(e,'email')}
          value={data.email}
          invalid={isSubmitted && data.email.trim() === ''}
          />
         <FormFeedback>
        {isSubmitted && data.email.trim() === '' && 'Email is required'}
      </FormFeedback>
       
 {/* password*/}
           <Label for="password">Enter Password</Label>
          <Input
          type='password'
          id='password'
          onChange={(e)=>handleChange(e,'password')}
          value={data.password}
          invalid={isSubmitted && data.password.trim() === ''}
          />
          <FormFeedback>
          {isSubmitted && data.password.trim() === '' && 'password is requried'}
          </FormFeedback>

<Label for="about">Confirm Password</Label>
       <Input
        type='password'
        id='about'
        onChange={(e) => handleChange(e, 'about')}
        value={data.confirmPassword}
        invalid={data.password !== data.about}
      />
       <FormFeedback>
         {data.password !== data.about ? "Passwords do not match": null}  
         </FormFeedback>
        </FormGroup>
        <Container className='text-center ' >
          <Button color='success'>
            Register
          </Button>
          <Button onClick={resetData} color='danger'type='reset' className='ms-2'>
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

export default Sign