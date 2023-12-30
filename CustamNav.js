import React, { useEffect, useState } from 'react';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { doLogout, getCurrentUserDetail, isLoginedIn } from '../auth';

const CustamNav = (args) => {
  let nevigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [login, setLogin]=useState(false);
  const [user, setUser]=useState(undefined);

  useEffect(()=>{

    setLogin(isLoginedIn());
    setUser(getCurrentUserDetail());

  },[login])

  const logout=()=>{
    doLogout(()=>{
      //logged out
      setLogin(false)
      nevigate("/login")
    })
  }


  return (
    <div>
      <Navbar  {...args} color='warning' className='px-4'   expand="md" fixed=''>
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/dashboard">Dashboard</NavLink>
            </NavItem>  
            <NavItem>
              <NavLink tag={ReactLink} to="/newform">New Application</NavLink>
            </NavItem>  
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Event
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Service</DropdownItem>
                <DropdownItem>Contact Us</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Report</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav className="ml-auto cursor-pointer" navbar>

            {
              login &&(
               <>
              <NavItem>
                <NavLink tag={ReactLink} to="/user/form">
                 <PersonPinIcon/>{user.email}
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink onClick={logout}>
                  Logout
                </NavLink>
              </NavItem>
              </>
              
              )
            }
         {
          !login &&(
            <>
             <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/sign">
                Register
              </NavLink>
            </NavItem>
            </>
          )
         }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustamNav;
