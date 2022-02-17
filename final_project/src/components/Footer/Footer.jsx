import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <a href="https://books.am/am">
            <img src="https://books.am/media/logo/stores/1/main_logo.png" alt="logo" />
          </a>
          <ul className="menu_bar">
            <li><strong><NavLink to="/about">Մեր մասին</NavLink></strong></li>
            <li><strong><NavLink to="/news">Նորություններ</NavLink></strong></li>
            <li><strong><NavLink to="/policy">Ինչպես պատվիրել</NavLink></strong></li>
            <li><strong><NavLink to="/faq">Հաճախ տրվող հարցեր</NavLink></strong></li>
            <li><strong><NavLink to="/adresses">Կապ</NavLink></strong></li>
          </ul>
          <ul className="social">
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <img src="icons/facebook_icon.png" className="icon" alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <img src="icons/instagram_icon.png" className="icon" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="copyrights">
          <span>
            &copy;
            {' '}
            {new Date().getFullYear()}
            , &copy; «Բուկինիստ» ՍՊԸ |,
            {' '}
          </span>
          <span>Բոլոր իրավունքները պահպանված են</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
