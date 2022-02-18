export const configSelector = ({ ConfigsDuck }) => ConfigsDuck;
export const bookSelector = ({ BookDuck }) => BookDuck.books;
export const currentBookSelector = ({ BookDuck }) => BookDuck.currentID;
