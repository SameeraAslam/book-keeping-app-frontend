import { BOOK_UPDATE_FAIL, BOOK_UPDATE_REQUEST, BOOK_UPDATE_SUCCESS, CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, DELETE_BOOK_FAIL, DELETE_BOOK_REQUEST, DELETE_BOOK_SUCCESS } from "../../actions/books/actionTypes";
import { FETCH_BOOK_FAIL, FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS } from "../../actions/books/actionTypes"

const initialState = {
    books: [],
    loading: false,
    error: "",
}
const singlereducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOK_REQUEST:
            return {
              
                loading: true,
            }
        case FETCH_BOOK_SUCCESS:
            return {
             books: action.payload,
                loading: false,
            }
        case FETCH_BOOK_FAIL:
            return {
               
                loading: false,
                error: action.payload,

            }
        case CREATE_BOOK_REQUEST:
            return {
                
                loading: true,
            }
        case CREATE_BOOK_SUCCESS:
            return {
               ...state,
                books:action.payload,
                loading:false,

            }
        case CREATE_BOOK_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case DELETE_BOOK_REQUEST:
            return {
                loading: true,
            }
        case DELETE_BOOK_SUCCESS:
            return {
                loading: false
            }
        case DELETE_BOOK_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case BOOK_UPDATE_REQUEST:
            return {
                loading: true,
            }
        case BOOK_UPDATE_SUCCESS:
            return {
                
                loading: false,
            }
        case BOOK_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload

            }

        default:
            return state;



    }

}

export { singlereducer };