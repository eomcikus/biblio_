
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './navbar.css'
import logo from './kidlit.png'
import { useSelector } from 'react-redux';
const NavBar = () => {
  const user = useSelector(state => state.session.user)
  return (
    <nav className='navbar-container'>
      
      <div><NavLink to='/'><img src={logo} /></NavLink></div> 
        <div>
          <NavLink to='/books' 
          exact={true} 
          activeClassName='active' 
          className='nav-home'>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to='/user/books'
          exact={true}
          className='nav-mybooks'>
            My Books
          </NavLink>
        </div>
        {/* <div>
          <NavLink to='/login' 
          exact={true} 
          activeClassName='active'
          className='nav-login'>
            Login
          </NavLink>
        </div> */}
        {/* <div>
          <NavLink 
          to='/sign-up' 
          exact={true} 
          activeClassName='active'>
            Sign Up
          </NavLink>
        </div> */}
        {/* <div>
          <NavLink 
          to='/users' 
          exact={true} 
          activeClassName='active'>
            Users
          </NavLink>
        </div> */}
        <div>
          {user && (
          <LogoutButton />
          )}
        </div>

    </nav>
  );
}

export default NavBar;
