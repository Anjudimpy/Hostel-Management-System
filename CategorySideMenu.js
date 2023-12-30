import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import {loadAllCategories} from '../Services/Category-Caste';
import { Link } from 'react-router-dom';

function CategorySideMenu() {

  const [categories, setCategories] =useState([])
  useEffect(()=>{

    loadAllCategories().then(data=>{
      setCategories([...data])
    }).catch(error=>{
      console.log(error);
    })

  },[])

  return (
   <div>
    <ListGroup>
        <ListGroupItem  tag={Link} to="/newform" action={true} className='border-0  shadow '>
            ALL Category
        </ListGroupItem >
        {categories && categories.map((cat,index)=>{
          return(
            <ListGroupItem tag={Link} to={"/categories/"+cat.categoryId} key={index} action={true} className='border-0 shadow'>
              {cat.categoryTitle}
            </ListGroupItem>
          )
        })}
     
    </ListGroup>
   </div>
  )
}

export default CategorySideMenu