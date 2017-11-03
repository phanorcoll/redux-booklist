import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.jsx';
import ActiveBook from './reducer_active_book.jsx';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;