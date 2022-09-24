import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction } from '../../redux/actions/users/userActions';
import "../../App.css";
import Error from '../Error';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  
  const userLogin = useSelector(state => state.userLogin);
  const {users, loading, error} = userLogin;
  console.log("user from register",users);


  const formSubmitHandler = e => {
    e.preventDefault();
    const userData ={
        name:name,
        email:email,
        password:password,
    }
    dispatch(registerUserAction(userData));
  };

  
  useEffect(() => {
    if (users) {
      Navigate("/profile")
      
    }
    
  }, [users]);
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto book-block-register'>
        <div className='container  '>

          <h1 className='text-center'>Register</h1>
          {loading && <h1>Loading</h1>}
          {error && <Error>{error}</Error>}

          <form onSubmit={formSubmitHandler}>
            <fieldset>
              <div className='form-group' style={{marginBottom:"15px 2px"}}>
                <label htmlFor='exampleInputEmail1' style={{marginBottom:"8px"}}>Name</label>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                />
              </div>
              <div className='form-group'  style={{margin:"15px 2px"}}>
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
                  onChange={e => setpassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-book m-2'>
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;