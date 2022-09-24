import { CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, FETCH_BOOK_FAIL, FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS, DELETE_BOOK_REQUEST, DELETE_BOOK_SUCCESS, DELETE_BOOK_FAIL, BOOK_UPDATE_REQUEST, BOOK_UPDATE_SUCCESS, BOOK_UPDATE_FAIL } from "./actionTypes";
import axios from "axios";

const createBookAction = bookdata => {
    return async (dispatch) => {

        try {
            dispatch({
                type: CREATE_BOOK_REQUEST,
            })

            const config = {
                "Content-Type": "application/json",
            }

            const { data } = await axios.post("https://book-keeping-app34.herokuapp.com/api/books", bookdata, config);
            dispatch({
                type: CREATE_BOOK_SUCCESS,
                payload: data,
            })


        }
        catch (error) {
            dispatch({
                type: CREATE_BOOK_FAIL,
                payload: error.response && error.response.data.message,

            })

        }
    }
}

const fetchBookAction = () => {
    return async (dispatch) => {

        try {
            dispatch({
                type: FETCH_BOOK_REQUEST,
            })

            const config = {
                headers: {
                    "Content-Type": "application/json",

                }

            }

            const { data } = await axios.get("https://book-keeping-app34.herokuapp.com/api/books", config);


            dispatch({
                type: FETCH_BOOK_SUCCESS,
                payload: data,
            })


        }
        catch (error) {
            dispatch({
                type: FETCH_BOOK_FAIL,
                payload: error.response && error.response.data.message,

            })

        }
    }
}


const updateBookAction = (id,updatedData) => {
    return async (dispatch) => {

        try {
            dispatch({
                type: BOOK_UPDATE_REQUEST,
            })
            

            const { data } = await axios.put(`https://book-keeping-app34.herokuapp.com/api/books/${id}`, updatedData);


            dispatch({
                type: BOOK_UPDATE_SUCCESS,
                payload: data,
            })


        }
        catch (error) {
            dispatch({
                type: BOOK_UPDATE_FAIL,
                payload: error.response && error.response.data.message,

            })

        }
    }
}


const deleteBookAction = id =>{
    return async(dispatch) => {

       try{
        dispatch({
        type:DELETE_BOOK_REQUEST,
    })

    const config ={
        "Content-Type":"application/json",
    }

    const { data } = await axios.delete(`https://book-keeping-app34.herokuapp.com/api/books/${id}`, config);



    dispatch({
        type:DELETE_BOOK_SUCCESS,
        payload: data,
    })


       }
       catch(error){
        dispatch({
            type:DELETE_BOOK_FAIL,
            payload:error.response && error.response.data.message,


        })
       }
    }
} 

export { createBookAction, fetchBookAction, updateBookAction,deleteBookAction };