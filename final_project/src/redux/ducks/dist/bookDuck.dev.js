"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.currentCategory = exports.currentPage = exports.currentBook = exports.fetchBooks = exports.getCurrentPage = exports.getCurrentCategory = exports.getCurrentBook = exports.createBooks = void 0;

var _redux = require("../../helpers/redux");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FETCH_BOOKS = 'bookDuck/FETCH_BOOKS';
var BOOK_ID = 'bookDuck/BOOK_ID';
var CATEGORY_ID = 'bookDuck/CATEGORY_ID';
var CURRENT_PAGE = 'bookDuck/CURRENT_PAGE';
var createBooks = (0, _redux.createAction)(FETCH_BOOKS);
exports.createBooks = createBooks;
var getCurrentBook = (0, _redux.createAction)(BOOK_ID);
exports.getCurrentBook = getCurrentBook;
var getCurrentCategory = (0, _redux.createAction)(CATEGORY_ID);
exports.getCurrentCategory = getCurrentCategory;
var getCurrentPage = (0, _redux.createAction)(CURRENT_PAGE);
exports.getCurrentPage = getCurrentPage;

var fetchBooks = function fetchBooks() {
  return function (dispatch) {
    fetch('/db.json').then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch(createBooks(res.books));
    })["catch"](function (e) {
      return console.log('error from messagesContext', e);
    });
  };
};

exports.fetchBooks = fetchBooks;

var currentBook = function currentBook(id) {
  return function (dispatch) {
    dispatch(getCurrentBook(id));
  };
};

exports.currentBook = currentBook;

var currentPage = function currentPage(id) {
  return function (dispatch) {
    dispatch(getCurrentPage(id));
  };
};

exports.currentPage = currentPage;

var currentCategory = function currentCategory(id) {
  return function (dispatch) {
    dispatch(getCurrentCategory(id));
  };
};

exports.currentCategory = currentCategory;
var initialStateApp = {
  books: [],
  bookID: null,
  categoryID: null,
  currentPage: 1
};

var BookDuck = function BookDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateApp;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FETCH_BOOKS:
      return _objectSpread({}, state, {
        books: action.payload
      });

    case BOOK_ID:
      return _objectSpread({}, state, {
        bookID: action.payload
      });

    case CATEGORY_ID:
      return _objectSpread({}, state, {
        categoryID: action.payload
      });

    case CURRENT_PAGE:
      return _objectSpread({}, state, {
        currentPage: action.payload
      });

    default:
      return state;
  }
};

var _default = BookDuck;
exports["default"] = _default;