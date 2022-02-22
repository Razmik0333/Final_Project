// Object.defineProperty(exports, '__esModule', {
//   value: true,
// });
// eslint-disable-next-line max-len
// exports.default = exports.currentCategory = exports.currentPage = exports.currentBook = exports.fetchBooks = exports.getCurrentPage = exports.getCurrentCategory = exports.getCurrentBook = exports.createBooks = void 0;

// const _redux = require('../../helpers/redux');

// eslint-disable-next-line max-len
// function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); keys.push.apply(keys, symbols); } return keys; }

// eslint-disable-next-line max-len
// function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// function _defineProperty(obj, key, value) {
//   if (key in obj) {
//     Object.defineProperty(obj, key, {
//       value, enumerable: true, configurable: true, writable: true,
//     });
//   } else { obj[key] = value; } return obj;
// }

// const FETCH_BOOKS = 'bookDuck/FETCH_BOOKS';
// const BOOK_ID = 'bookDuck/BOOK_ID';
// const CATEGORY_ID = 'bookDuck/CATEGORY_ID';
// const CURRENT_PAGE = 'bookDuck/CURRENT_PAGE';
// const createBooks = (0, _redux.createAction)(FETCH_BOOKS);
// exports.createBooks = createBooks;
// const getCurrentBook = (0, _redux.createAction)(BOOK_ID);
// exports.getCurrentBook = getCurrentBook;
// const getCurrentCategory = (0, _redux.createAction)(CATEGORY_ID);
// exports.getCurrentCategory = getCurrentCategory;
// const getCurrentPage = (0, _redux.createAction)(CURRENT_PAGE);
// exports.getCurrentPage = getCurrentPage;

// const fetchBooks = function fetchBooks() {
//   return function (dispatch) {
//     fetch('/db.json').then((res) => res.json()).then((res) => {
//       dispatch(createBooks(res.books));
//     }).catch((e) => console.log('error from messagesContext', e));
//   };
// };

// exports.fetchBooks = fetchBooks;

// const currentBook = function currentBook(id) {
//   return function (dispatch) {
//     dispatch(getCurrentBook(id));
//   };
// };

// exports.currentBook = currentBook;

// const currentPage = function currentPage(id) {
//   return function (dispatch) {
//     dispatch(getCurrentPage(id));
//   };
// };

// exports.currentPage = currentPage;

// const currentCategory = function currentCategory(id) {
//   return function (dispatch) {
//     dispatch(getCurrentCategory(id));
//   };
// };

// exports.currentCategory = currentCategory;
// const initialStateApp = {
//   books: [],
//   bookID: null,
//   categoryID: null,
//   currentPage: 1,
// };

// const BookDuck = function BookDuck() {
// eslint-disable-next-line max-len
//   const state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateApp;
//   const action = arguments.length > 1 ? arguments[1] : undefined;

//   switch (action.type) {
//     case FETCH_BOOKS:
//       return _objectSpread({}, state, {
//         books: action.payload,
//       });

//     case BOOK_ID:
//       return _objectSpread({}, state, {
//         bookID: action.payload,
//       });

//     case CATEGORY_ID:
//       return _objectSpread({}, state, {
//         categoryID: action.payload,
//       });

//     case CURRENT_PAGE:
//       return _objectSpread({}, state, {
//         currentPage: action.payload,
//       });

//     default:
//       return state;
//   }
// };

// const _default = BookDuck;
// exports.default = _default;
