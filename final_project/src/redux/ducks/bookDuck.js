import { createAction } from '../../helpers/redux';

const FETCH_BOOKS = 'appDuck/FETCH_BOOKS';
const CURRENT_BOOK = 'appDuck/CURRENT_BOOK';

export const createBooks = createAction(FETCH_BOOKS);
export const getCurrentBook = createAction(CURRENT_BOOK);
// console.log('🚀 ~ file: bookDuck.js ~ line 8 ~ getCurrentBook', getCurrentBook);

export const fetchBooks = () => (dispatch) => {
//   console.log(dispatch);
  fetch('/db.json')
    .then((res) => res.json())
    .then((res) => {
      dispatch(createBooks(res.books));
    })
    .catch((e) => console.log('error from messagesContext', e));
};
export const currentBook = (id) => (dispatch) => {
  console.log(id);

  dispatch(getCurrentBook(id));
};

const initialStateApp = {
  books: [],
  currentID: null,
};

const BookDuck = (state = initialStateApp, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case CURRENT_BOOK:
      return {
        ...state,
        currentID: action.payload,
      };
    default:
      return state;
  }
};

export default BookDuck;
