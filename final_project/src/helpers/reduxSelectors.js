export const configSelector = ({ ConfigsDuck }) => ConfigsDuck;
export const bookSelector = ({ BookDuck }) => BookDuck.books;
export const currentBookSelector = ({ BookDuck }) => BookDuck.bookID;
export const currentCategorySelector = ({ BookDuck }) => BookDuck.categoryID;
export const currentPageSelector = ({ BookDuck }) => BookDuck.currentPage;
