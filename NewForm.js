import React, { useEffect, useState } from 'react'
import Base from './Base'
import { loadAllForms } from '../Services/post-service'
import { Col, Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';
import PostForm from './PostForm';
import { toast } from 'react-toastify';
import CategorySideMenu from './CategorySideMenu';

const NewForm = () => {

    const [postForm, setPostForm]=useState({
        content:[],
        totalPage:'',
        totalElement:'',
        pageSize:'',
        lastPage:false,
        pageNumber:''
    });

    useEffect(()=>{
      
       changePage(0)    

    },[])

    const changePage=(pageNumber=0,pageSize=5)=>{
        if (pageNumber>postForm.pageNumber && postForm.lastPage){
            return
        }
        if (pageNumber<postForm.pageNumber && postForm.pageNumber==0){
            return
        }
        loadAllForms(pageNumber, pageSize).then(data=>{
            console.log(postForm)
            setPostForm(data)
            window.scroll(0,0)
        }).catch(error=>{
            toast.error("Error  in loading")
        })

    }

  return (
  <Base>
 <div className='container-fluid m-2'>
    <Row>
      <Col md={2} className='pt-2'>
      <CategorySideMenu/>
      </Col>
    <Col md={{size:10}}>
        <h1>Blog Count ({postForm?.totalElement})</h1>
       
       {
        postForm?.content.map((post)=>(
            <PostForm post={post} key={post.postId}/>
        ))  }

            <Container className='mt-4 '>
            <Pagination>
  <PaginationItem
  onClick={()=>changePage(postForm.pageNumber-1)}
  disabled={postForm.pageNumber==0}
  >
    <PaginationLink previous
    />
  </PaginationItem>
 {
    [...Array(postForm.totalPage)].map((item, index)=>(
        <PaginationItem onClick={()=>changePage(index)}
         active={index==postForm.pageNumber} key={index}>
      <PaginationLink>
      {index+1} 
      </PaginationLink>
      </PaginationItem>

    ))
 }
    <PaginationItem onClick={()=>changePage(1+postForm.pageNumber)} disabled={postForm.lastPage}>
    <PaginationLink
      href="#"
      next
    />
  </PaginationItem>

</Pagination>
            </Container>

    </Col>
    </Row>
 </div>
 
  </Base>
  )
}

export default NewForm