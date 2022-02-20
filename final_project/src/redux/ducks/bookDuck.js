import { createAction } from '../../helpers/redux';

const FETCH_BOOKS = 'bookDuck/FETCH_BOOKS';
const BOOK_ID = 'bookDuck/BOOK_ID';
const CATEGORY_ID = 'bookDuck/CATEGORY_ID';
const CURRENT_PAGE = 'bookDuck/CURRENT_PAGE';

export const createBooks = createAction(FETCH_BOOKS);
export const getCurrentBook = createAction(BOOK_ID);
export const getCurrentCategory = createAction(CATEGORY_ID);
export const getCurrentPage = createAction(CURRENT_PAGE);

export const fetchBooks = () => (dispatch) => {
  fetch('/db.json')
    .then((res) => res.json())
    .then((res) => {
      dispatch(createBooks(res.books));
    })
    .catch((e) => console.log('error from messagesContext', e));
};
export const currentBook = (id) => (dispatch) => {
  dispatch(getCurrentBook(id));
};
export const currentPage = (id) => (dispatch) => {
  dispatch(getCurrentPage(id));
};
export const currentCategory = (id) => (dispatch) => {
  dispatch(getCurrentCategory(id));
};

const initialStateApp = {
  books: [],
  bookID: null,
  categoryID: null,
  currentPage: 1,
};

const BookDuck = (state = initialStateApp, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case BOOK_ID:
      return {
        ...state,
        bookID: action.payload,
      };
    case CATEGORY_ID:
      return {
        ...state,
        categoryID: action.payload,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default BookDuck;