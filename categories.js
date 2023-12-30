import React, { useEffect, useState } from 'react'
import Base from './Base'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import CategorySideMenu from './CategorySideMenu'
import { loadPostCategoryWise } from '../Services/post-service'
import {toast} from 'react-toastify'
import PostForm from './PostForm'


function Categories() {

    const {categoryId}= useParams()

    const [posts, setPosts]=useState([])

    useEffect(()=>{
        loadPostCategoryWise(categoryId).then(data=>{
            setPosts([...data])
        }).catch(error=>{
            toast.error("error")
        })
    },[categoryId])

  return (
<Base>
<Container className='=mt-3'>
    <Row>
        <Col md={2} className="pt-5">
            <CategorySideMenu/>
        </Col>
        <Col md={10}>
            <h1>Total Form: {posts.length}</h1>
        {
            posts && posts.map((post, index)=>{
                return(
                    <PostForm key={index} post={post}/>
                )
            })
        }
        {posts.length<=0 ?<h1>No Form in this Category</h1>:''}
        </Col>
    </Row>
</Container>
</Base>
    
  )
}

export default Categories