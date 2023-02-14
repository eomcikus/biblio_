
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './navbar.css'
import logo from './kidlit.png'
import linkedin from './blacklinkedin.png'
import github from './github.png'
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
const NavBar = () => {
  const user = useSelector(state => state.session.user)
  return (
    <nav className='navbar-container'>
      
      <div><NavLink to='/'><img className='logo' src={logo} /></NavLink></div> 
        {/* <div>
          <NavLink to='/books' 
          exact={true} 
          activeClassName='active' 
          className='nav-home'>
            Home
          </NavLink>
        </div>
        <div className='libutton'>
        <a href={'https://www.linkedin.com/in/erin-duffy-omcikus-5641004a/'} target='_blank'><img id='about-icons' src={linkedin} /></a>
        </div>
        <div className='ghbutton'>
        <a href={'https://github.com/eomcikus'} target='_blank'><img  id='about-icons' src={github} /></a>
        </div>  */}

        {/* <div>
          <NavLink to='/user/books'
          exact={true}
          className='nav-mybooks'>
            My Books
          </NavLink>
        </div> */}
        <div>
          {!user && (
          <NavLink to='/login' 
          exact={true} 
          activeClassName='active'
          className='nav-login'>
            Login
          </NavLink>
          )}
        </div>
        <div>
          {!user && ( 
          <NavLink 
          to='/sign-up' 
          exact={true} 
          className='nav-signup'
          activeClassName='active'>
            Sign Up
          </NavLink>
          )}
        </div>
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
            // <div className='welcome-text'>Welcome back, {user.username}.</div>
            <ProfileButton className='profbutton' />
          )}
        </div>
        {/* <div> */}
          {/* {user && (
          <LogoutButton />
          )}
        {/* </div> */}

    </nav>
  );
}

export default NavBar;
