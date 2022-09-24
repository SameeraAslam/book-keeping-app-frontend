import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logoutUserAction } from '../../redux/actions/users/userActions';
import "../../App.css";
const Navbar = () => {
   
  const navigate = useNavigate();
 
  const state = useSelector(state => state.userLogin);
  const { users, loading, error } = state;

  

  const dispatch = useDispatch();


  const logoutHandler = () => {
    
    dispatch(logoutUserAction());
    navigate("/")
  }


  

  

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light' style={{display:"flex", justifyContent:"space-between"}}>
        <a className='navbar-brand' style={{color:"#fff"}} to='/'>
          Bookstagram
        </a>
        
      
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>


        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav m-auto light'>
            <li className='nav-item active'>
               <Link className='nav-link' to='/'>
               Home <span className='sr-only'>(current)</span>
                  </Link>
            </li>
            {!users ? (
              <>
                <li className='nav-item'>
                  
                  <Link className='nav-link' to='/login'>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/register'>
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/books'>
                    Books
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/addBooks'>
                    Add book
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link className='nav-link' to='/profile'>
                   Profile
                  </Link>
                </li>
                <li className='nav-item'>
                  <div onClick={logoutHandler}
                    className='nav-link logout'
                    to='/'>
                    Logout
                  </div>
                 
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;