

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchBookAction, updateBookAction } from '../../redux/actions/books/bookActions';


const EditBook = ({ history }) => {
  const { id } = useParams();
const navigate = useNavigate();
  //Get the book details and fill it in the form
  const bookDetails = useSelector(state => state.singlereducer);
  // console.log("books", bookDetails.books.find((a)=>{ return a._id == id}));
  const { book, loading } = bookDetails;
  let updateObj =  bookDetails?.books ? bookDetails?.books?.find((a)=>{ return a._id == id}):{}
  const [category, setCategory] = useState(updateObj?.category|| "");
  const [title, setTitle] = useState(updateObj?.title||"");
  const [author, setAuthor] = useState(updateObj?.author||"");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookAction());
  }, [dispatch, id]);

  //dispatch action

  const formSubmitHandler = e => {
    const data = {
      category,
      title,
      author,
    };
    e.preventDefault();
    console.log(data);
    dispatch(updateBookAction(id, data));
    dispatch(fetchBookAction());
    navigate("/books")
  };
  return (
   
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          
              <h1 className='text-center'>Update</h1>
              <form onSubmit={formSubmitHandler}>
                <fieldset>
                  <div className='form-group'>
                    <select
                      value={category}
                      onChange={e => setCategory(e.target.value)}
                      className='custom-select'>
                      <option defaultValue='programming'>programming</option>
                      <option value='religion'>Religion</option>
                      <option value='life'>life</option>
                      <option value='culture'>culture</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Author </label>
                    <input
                      value={author}
                      onChange={e => setAuthor(e.target.value)}
                      type='text'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Author name'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputPassword1'>title</label>
                    <input
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      type='text'
                      className='form-control'
                      id='exampleInputPassword1'
                      placeholder='Book title'
                    />
                  </div>
                  <button type='submit' className='btn btn-dark m-auto'>
                    Create Book
                  </button>
                </fieldset>
              </form>
           
        </div>
      </div>
    </div>
  );
};

export default EditBook;