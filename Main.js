import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Sign from './Sign';
import Dashboard from '../hostelmanagementsys/Dashboard';
import Hostel from '../hostelmanagementsys/Hostel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRout from './PrivateRout';
import UserPage from './UserPage';
import Forms from '../hostelmanagementsys/Forms.js/Form';
import Log from '../hostelmanagementsys/Log';
import FixedHeader from './FixedHeader';
import NewForm from './NewForm';
import Single from './Single';
import UserProvider from '../context/userProvider';
import Categories from './categories';



const Main = () => {
  return (
  <>
  
  <UserProvider>
  <ToastContainer/>
     <div className='fixed top-0 left-0 w-full z-10'>
     <FixedHeader/>
     </div>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/single/:postId'element={<Single/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/loginoption' element={<Log/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/newform'element={<NewForm/>}/>
      <Route path='/hostel' element={<Hostel/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/categories/:categoryId' element={<Categories/>}/>
    
     
      
      <Route path='/user' element={<PrivateRout/>}>
      <Route path='form' element={<Forms/>}/>
        </Route>
        <Route path='/hostel' element={<Hostel/>}/> 

      </Routes>
  </UserProvider>

  </>
    
  )
}

export default Main