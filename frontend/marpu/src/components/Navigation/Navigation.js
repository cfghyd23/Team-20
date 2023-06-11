import React, { useEffect } from 'react'
import './Navigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector,useDispatch } from 'react-redux';
import { whenLogout } from '../../slices/user';
import { useNavigate } from 'react-router-dom'




function Navigation() {
  let dispatch = useDispatch()
  let {userData,success} = useSelector(state=>state.user)
  const navigate=useNavigate()
  let logout = ()=>{
    // alert('hello')
    navigate('/home') 
    // alert('bye')
    localStorage.clear()
    dispatch(whenLogout())


  }



  return (
    <div className='navi-main'>
         <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {
            !success 
            ?
            <Nav className="ms-auto">
            <NavLink className="m-2 text-light text-decoration-none" to="/home">Home</NavLink>
            <NavLink className="m-2 text-light text-decoration-none" to="/signup">Sign up</NavLink>
            <NavLink className="m-2 text-light text-decoration-none"  to="/login">Login</NavLink>
            <NavLink className="m-2 text-light text-decoration-none" to="/userDashboard">userDashboard</NavLink>
            <NavLink className="m-2 text-light text-decoration-none" to="/admin">Admin</NavLink>
          </Nav>
            :
            <Nav className="ms-auto">
            <NavLink className="m-2 text-light text-decoration-none" to="/userDashboard">{userData.username}</NavLink>
            <NavLink className="m-2 text-light text-decoration-none" to="/home">Home</NavLink>
            <NavLink className="m-2 text-light text-decoration-none" onClick={logout}>Logout</NavLink>
            <NavLink className="m-2 text-light text-decoration-none">Change Password</NavLink>
            </Nav>

          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation