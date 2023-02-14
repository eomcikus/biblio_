import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Redirect, useHistory, NavLink } from 'react-router-dom'
// import './Navigation.css'
import { UserShelf } from "../shelves/UserShelf";
import './profilebutton.css'
// import SignupFormModal from "../SignupFormModal";
// import LoginFormModal from "../LoginFormModal";

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);
  // console.log('user', sessionUser)
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    return history.push('/')
    // return <Redirect to="/spots" />
  };

  return (
    <>
      <button onClick={openMenu} className='profile-button'>
      <i class="fa-solid fa-book" id='book-icon'></i>
      </button>
      {showMenu && sessionUser && (
        <div className="profile-dropdown">
            <div>My Links</div>
            <div className='your-shelf'><NavLink className='your-shelf' to={'/shelves/user'}>My Shelf</NavLink></div>
          {/* <div className='your-bookings'><NavLink className='your-bookings' to={'/bookings/current'}>My Bookings</NavLink> </div> */}
          <div>
            <button onClick={logout} className='logout-button'>Log Out</button>
          </div>
        </div>
      )}

    </>
  );
}

export default ProfileButton;