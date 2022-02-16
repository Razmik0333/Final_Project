import { createAction } from '../../helpers/redux';

const FETCH_BOOKS = 'appDuck/FETCH_BOOKS';

export const createBooks = createAction(FETCH_BOOKS);

export const fetchBooks = () => (dispatch) => {
  fetch('/db.json')
    .then((res) => res.json())
    .then((res) => {
      console.log(res.books);

      dispatch(createBooks(res.books));
    })
    .catch((e) => console.log('error from messagesContext', e));
};

const initialStateApp = {
  books: [],
};

const BookDuck = (state = initialStateApp, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default BookDuck;
