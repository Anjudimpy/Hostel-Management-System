import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoginedIn } from '../auth'

const PrivateRout = () => {

return isLoginedIn()? <Outlet/>:<Navigate to={"/login"}/>

}

export default PrivateRout