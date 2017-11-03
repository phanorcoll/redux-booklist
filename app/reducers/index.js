import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.jsx';

const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;