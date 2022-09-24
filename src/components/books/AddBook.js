
import '../../App.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBookAction} from '../../redux/actions/books/bookActions';




function AddBook() {

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

 
  const dispatch = useDispatch();

  
  const handleFormSubmit = e => {
    e.preventDefault();
    alert("Your book is created..")

    const data = {
      title,
      author,
      category,
    };
    dispatch(createBookAction(data));
  };


  return (
    <div className='abc'>
      
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container book-block'>
        <h1>BOOK APP</h1>
          
                  <form onSubmit={handleFormSubmit}>
                    <fieldset>
                      <div className='form-group '>
                        <select
                          value={category}
                          onChange={e => setCategory(e.target.value)}
                          className='custom-select'>
                          <option defaultValue='programming'>
                            programming
                          </option>
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
                      <button type='submit' className='btn btn-book m-2'>
                        Create Book
                      </button>
                    </fieldset>
                  </form>
                </div>
              
              </div>
            </div>
          </div>
   
  );
  }

export default AddBook;
