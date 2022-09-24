import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {loginUserAction } from '../../redux/actions/users/userActions';
import "../../App.css";
import Error from '../Error';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const Navigate = useNavigate();


  const state = useSelector(state => {
    return state.userLogin;
  });
const { loading, users, error} = state;


  const loginUserSubmitHandler = e => {
    e.preventDefault();
    console.log(email, password);
    const userData ={
        email:email,
        password:password,
    }
    dispatch(loginUserAction(userData));
  };

 
  useEffect(() => {
     if (users) 
Navigate("/profile")
   }, [state]);

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container book-block' style={{marginTop:"30px"}}>
        <h1>LOGIN</h1>
          {loading && <h5>Loading</h5>}
          {error && <Error>{error}</Error>}
          <form onSubmit={loginUserSubmitHandler}>
            <fieldset>
              <div className='form-group' style={{marginBottom:"15px 2px"}}>
                <label htmlFor='exampleInputEmail1' style={{marginBottom:"8px"}}>Email address</label>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group' style={{margin:"15px 2px"}}>
                <label htmlFor='exampleInputPassword1' style={{marginBottom:"8px"}}>Password</label>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-book m-auto'>
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;