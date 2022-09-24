import React from 'react';
import { useSelector } from 'react-redux';
import '../../App.css';
import pic from '../../assets/images/bookpic.jpg';
import { Link } from 'react-router-dom';

const Profile = () => {


  const users = useSelector(state => (

    state.userLogin.users
  )
  );






  return (
    <>
      <div className='container' >
        <div className='row '>
          {
            users && <>
              <h1>Hello {users.name}..</h1>
              <hr/>
              <div className='col m-2'>
                <div className='card m-auto ' style={{ width: '50%' }}>
                  <img src={pic} className='card-img-top' alt='user-pic' />
                  <div className='card-body'>
                    <h4 className='card-title'>{users.email}</h4>
                    <p className='card-text'>{users.name}</p>
                    <Link to='/' className='btn btn-primary'>
                      Back to Home.
                    </Link>
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      </div>


    </>
  );
};

export default Profile;