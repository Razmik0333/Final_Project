import { NavLink } from 'react-router-dom';

const rusJson = {
  books: 'Книги',
  aboutUs: 'О нас',
  news: 'Новости',
  blog: 'Блог',
  search: 'Поиск',
  login: 'Войти',
  favorites: 'Избранное',
  basket: 'Корзина',
  howToOrder: 'Как заказать',
  contact: 'Контакты',
};
const engJson = {
  books: 'Books',
  aboutUs: 'About us',
  news: 'News',
  blog: 'Blog',
  search: 'Search',
  login: 'Login',
  favorites: 'Favorites',
  basket: 'Basket',
  howToOrder: 'How to order',
  contact: 'Contact',
};
const armJson = {
  books: 'Գրքեր',
  aboutUs: 'Մեր մասին',
  news: 'Նորություններ',
  blog: 'Բլոգ',
  search: 'Որոնել',
  login: 'Մուտք',
  favorites: 'Նախընտրելի',
  basket: 'Զամբյուղ',
  howToOrder: 'Ինչպես պատվիրել',
  contact: 'Կապ',
};

const onChange = (ev) => {
  let selectedLanguage;
  switch (ev.target.value) {
    case 'Rus': selectedLanguage = rusJson; break;
    case 'Arm': selectedLanguage = armJson; break;
    default: selectedLanguage = engJson; break;
  }

  for (const i in selectedLanguage) {
    const item = document.getElementsByClassName(i)[0];
    if (item) {
      item.innerHTML = selectedLanguage[i];
    }
  }
};

function NavBar() {
  return (
    <div className="navigations">
      <div className="container">
        <div className="network_tel">
          <div className="network_img">
            <NavLink to="/facebook" href="https://www.facebook.com/">
              <img className="img_net" src="/icons/4922978.png" alt="fb" />
            </NavLink>
            <NavLink to="/instagram" href="https://www.instagram.com/">
              <img className="img_net" src="/icons/3621435.png" alt="fb" />
            </NavLink>
            <NavLink to="/telegram" href="https://www.telegram.com/">
              <img className="img_net" src="/icons/4926616.png" alt="fb" />
            </NavLink>
          </div>
          <div className="phone">
            <NavLink to="/telephone" href="+374 911119">
              <span><img className="icon_tel" src="/icons/156515.png" alt="tel" /></span>
              <span> +374 911119 </span>
            </NavLink>
          </div>
        </div>
        <div className="navigation">
          <NavLink to="/books" className="books"> Գրքեր </NavLink>
          <NavLink to="/about" className="aboutUs"> Մեր մասին </NavLink>
          <NavLink to="/news" className="news"> Նորություններ </NavLink>
          <NavLink to="/blog" className="blog"> Բլոգ </NavLink>
        </div>
        <div className="selected">
          <select className="select" name="change" id="change">
            <option value="AMD"> AMD </option>
            <option value="RUB"> RUB </option>
            <option value="USD"> USD </option>
          </select>
          <select className="select" name="language" id="language" onChange={onChange}>
            <option value="Arm"> Հայ</option>
            <option value="Rus"> Рус</option>
            <option value="Eng"> Eng </option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
