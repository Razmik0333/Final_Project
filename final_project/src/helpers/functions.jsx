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
