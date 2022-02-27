import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { currencyes, languages } from '../../../../helpers/constants';
import { getChangeCurrency, getChangeLanguage } from '../../../../redux/ducks/configsDuck';

// const rusJson = {
//   books: 'Книги',
//   aboutUs: 'О нас',
//   news: 'Новости',
//   blog: 'Блог',
//   search: 'Поиск',
//   login: 'Войти',
//   favorites: 'Избранное',
//   basket: 'Корзина',
//   howToOrder: 'Как заказать',
//   contact: 'Контакты',
// };
// const engJson = {
//   books: 'Books',
//   aboutUs: 'About us',
//   news: 'News',
//   blog: 'Blog',
//   search: 'Search',
//   login: 'Login',
//   favorites: 'Favorites',
//   basket: 'Basket',
//   howToOrder: 'How to order',
//   contact: 'Contact',
// };
// const armJson = {
//   books: 'Գրքեր',
//   aboutUs: 'Մեր մասին',
//   news: 'Նորություններ',
//   blog: 'Բլոգ',
//   search: 'Որոնել',
//   login: 'Մուտք',
//   favorites: 'Նախընտրելի',
//   basket: 'Զամբյուղ',
//   howToOrder: 'Ինչպես պատվիրել',
//   contact: 'Կապ',
// };

// const onChange = (ev) => {
//   let selectedLanguage;
//   switch (ev.target.value) {
//     case 'Rus': selectedLanguage = rusJson; break;
//     case 'Arm': selectedLanguage = armJson; break;
//     default: selectedLanguage = engJson; break;
//   }

//   for (const i in selectedLanguage) {
//     const item = document.getElementsByClassName(i)[0];
//     if (item) {
//       item.innerHTML = selectedLanguage[i];
//     }
//   }
// };

function NavBar() {
  const dispatch = useDispatch();

  const handleChangeCurrency = (e) => {
    dispatch(getChangeCurrency(e.target.value));
  };
  const handleChangelanguage = (e) => {
    dispatch(getChangeLanguage(e.target.value));
  };

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
          <NavLink to="/about"> Մեր մասին </NavLink>
          <NavLink to="/news"> Նորություններ </NavLink>
          <NavLink to="/faq"> Հաճախ տրվող հարցեր </NavLink>
          {/* <NavLink to="/blog"> Բլոգ </NavLink> */}
        </div>
        <div className=" selected">
          <select
            className="select"
            onChange={handleChangeCurrency}
            name="change"
            id="change"
          >
            {
              currencyes.map((currency) => (
                <option key={currency.target} value={currency.target}>
                  {currency.option}
                </option>
              ))
            }
          </select>
          <select
            className="select"
            onChange={handleChangelanguage}
            name="language"
            id="language"
          >
            {
              languages.map((language) => (
                <option key={language.target} value={language.target}>
                  {language.option}
                </option>
              ))
            }
          </select>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
