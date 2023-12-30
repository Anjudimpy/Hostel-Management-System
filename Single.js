import React, { useEffect, useState } from 'react'
import Base from './Base'
import { Link, useParams } from 'react-router-dom'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'
import { loadPost } from '../Services/post-service'
import { toast } from 'react-toastify'
import { BASE_URL } from '../Services/helper'

const Single = () => {

  const {postId}=useParams()
  const [post,setPost]=useState(null)

  useEffect(()=>{

    loadPost(postId).then(data=>{
      console.log(data);
      setPost(data)

    }).catch(error=>{
     console .log(error)
    toast.error("Error")})

  },[])

  const printDate=(numbers)=>{
    return new Date(numbers).toLocaleDateString()
  }

  return (
  <Base>
 <Container>
  {/* <Link to="/">Home</Link> */}
  <Row>
    <Col md={{size:12}}>
    <Card className='mt-3'>
   {
    (post)&&(
      <CardBody>
          <div className='image-container mb-5 mt-3 p-3 flex justify-start w-full bg-slate-200 ' >
      <div style={{width:'90%'}}>
      <CardText className=' text-red-600'>Submitted by:<sapn className='text-muted'> <b>{post.user.name}</b> on <b>{printDate(post.addedDate)}</b></sapn></CardText>
      <CardText className=' text-red-600'>Gender: <span className='text-muted'>{post.category.gender}</span></CardText>
    <CardText className=' text-red-600'>Category: <span className='text-muted'>{post.category.categoryTitle}</span>  </CardText>

    </div>
          <div style={{maxWidth:'10%'}}>
      <img src={BASE_URL+'/post/image/'+post.imageName} alt=''/>
         </div>
    </div>
   <div className='pl-10'>
   <CardText>Name: <span className='text-muted'>{post.title}</span></CardText>
    <CardText>{post.parents}</CardText>
    <CardText>Caste: <span className='text-muted'>{post.category.categoryDescription}</span></CardText>
    <CardText>{post.content}</CardText>
    <CardText>{post.address}</CardText>
    <CardText>{post. curentinstitude}</CardText>
    <CardText>{post.lastinstitude}</CardText>
    <CardText>{post.field1}</CardText>
    <CardText>{post.field2}</CardText>
    <CardText>{post.field3}</CardText> 
    </div>                                                                             
     
    </CardBody>
    )
   }
    </Card>
    </Col>
  </Row>
 </Container>
  </Base>
  )
}

export default Single