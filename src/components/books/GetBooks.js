import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookAction } from '../../redux/actions/books/bookActions';
import { deleteBookAction } from '../../redux/actions/books/bookActions';
import { Link } from 'react-router-dom';
import Loading from "../Loading";

const GetBooks = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchBookAction());
  }, [dispatch]);
const deleteBook =(id)=>{
  dispatch(deleteBookAction(id));
  dispatch(fetchBookAction());
}

  const { books, loading } = useSelector(state => {
    return state.singlereducer;
  });
 
  return (
 <div className='container'>
  <div className='books-table'>
      <div className='row'>
        <div className='col'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>Sno</th>
                <th scope='col'>Author</th>
                <th scope='col'>Book Name</th>
                <th scope='col'>Action</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loading />
              ) : (
                <>
                  {books &&
                    books.map((book, index) => {
                      return (
                        <>
                        
                          <tr className='table'>
                            <th>{index+1}</th>
                            <th scope='row'>{book.title}</th>
                            <td>{book.author}</td>
                            <td>
                              <i
                                className='fas fa-trash '
                                onClick={()=>{deleteBook(book._id)}}
                                style={{
                                  color: 'red',
                                  cursor: 'pointer',
                                }}
                                ></i>
                            </td>
                            <td>
                               <Link to={`/edit/${book._id}`}>
                               <i
                                className='far fa-edit'
                                style={{
                                  color: 'yellow',
                                  cursor: 'pointer',
                                }}></i></Link>
                              
                             
                            </td>
                          </tr>
                          
                        </>
                      );
                    })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
   
  )
};

export default GetBooks;