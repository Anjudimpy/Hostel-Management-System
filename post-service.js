import React from 'react'
import { privateAxios } from './helper'
import { myAxios } from './helper'

//create post function
export const createPost = (postData) => {
  return privateAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/posts`,postData).then((response)=>response.data)
}

//get all form
export const loadAllForms=(pageNumber,pageSize)=>{

  return myAxios.get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`).then((response)=>response.data);
}

//load single form of given id

export const loadPost=(postId)=>{

  return myAxios.get("/posts/"+postId).then((response)=>response.data);

}

// upload documnet

export const uploadPostImage=(image,postId)=>{
  let formData= new FormData()
  formData.append("image",image)
  return privateAxios.post(`/post/image/upload/${postId}`,formData,{
   headers:{
    'content-Type':'multipart/from-data'
   }
  })
  .then((response)=>response.data)
}

//get categories by post
export const loadPostCategoryWise=(categoryId)=>
{
    return privateAxios.get(`/category/${categoryId}/posts`).then(res=>res.data)
}


