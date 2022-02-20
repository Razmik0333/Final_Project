"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentPageSelector = exports.currentCategorySelector = exports.currentBookSelector = exports.bookSelector = exports.configSelector = void 0;

var configSelector = function configSelector(_ref) {
  var ConfigsDuck = _ref.ConfigsDuck;
  return ConfigsDuck;
};

exports.configSelector = configSelector;

var bookSelector = function bookSelector(_ref2) {
  var BookDuck = _ref2.BookDuck;
  return BookDuck.books;
};

exports.bookSelector = bookSelector;

var currentBookSelector = function currentBookSelector(_ref3) {
  var BookDuck = _ref3.BookDuck;
  return BookDuck.bookID;
};

exports.currentBookSelector = currentBookSelector;

var currentCategorySelector = function currentCategorySelector(_ref4) {
  var BookDuck = _ref4.BookDuck;
  return BookDuck.categoryID;
};

exports.currentCategorySelector = currentCategorySelector;

var currentPageSelector = function currentPageSelector(_ref5) {
  var BookDuck = _ref5.BookDuck;
  return BookDuck.currentPage;
};

exports.currentPageSelector = currentPageSelector;