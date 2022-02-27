export const arrStart = (data, first, last) => data.filter((_, pos) => pos >= first && pos <= last);

export const getArrayCategories = (data, current) => data.reduce((acc, curr) => {
  if (curr.categories.includes(current)) {
    acc.push(curr);
  }
  return acc;
}, []);

export const getPages = (data) => Math.ceil(data.length / 15);

export const getStart = (count, page) => count * (page - 1);

export const getFinal = (count, cur, total) => (count * cur < total ? cur * count - 1 : total - 1);

const getSortedByNewestArray = (data) => (data.sort((a, b) => {
  const dateA = new Date(a.publishedDate.$date);
  const dateB = new Date(b.publishedDate.$date);
  return dateA - dateB;
}));
const getSortedByNameArray = (data) => (data.sort((a, b) => {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
}));
export const getSortByPrice = (data) => (data.sort((a, b) => a.pageCount * 10 - b.pageCount * 10));

export const getFilteredArray = (data, filterType) => {
  switch (filterType) {
    case 'price':
      return getSortByPrice(data);
    case 'name':
      return getSortedByNameArray(data);
    case 'newest':
      return getSortedByNewestArray(data);
    default:
      return data;
  }
};

export const getCategories = (data) => data.reduce((acc, curr) => {
  curr.categories.forEach((item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
  });
  return acc;
}, []);
export const currencyValue = (value, key) => {
  switch (key) {
    case 'amdChange':
      return (
        <>
          {value}
          &#1423;
        </>
      );
    case 'rubChange':
      return (
        <>
          {Math.floor(value / 5.5)}
          &#8381;
        </>
      );
    case 'usdChange':
      return (
        <>
          {Math.floor(value / 485)}
          &#36;
        </>
      );
    default:
      return value;
  }
};

export const languagesValue = (value, key) => {
  switch (key) {
    case 'armChange':
      return (value);
    case 'rusChange':
      return (value);
    case 'engChange':
      return (value);
    default:
      return value;
  }
};
