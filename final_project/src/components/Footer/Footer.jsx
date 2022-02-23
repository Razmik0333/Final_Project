import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo1">
          <NavLink to="/">
            <img className="logo" src="/icons/2815428.png" alt="logo" />
          </NavLink>
          <ul className="menu_bar">
            <li><strong><NavLink to="/about">Մեր մասին</NavLink></strong></li>
            <li><strong><NavLink to="/news">Նորություններ</NavLink></strong></li>
            {/* <li><strong><NavLink to="/policy">Ինչպես պատվիրել</NavLink></strong></li> */}
            <li><strong><NavLink to="/faq">Հաճախ տրվող հարցեր</NavLink></strong></li>
            <li><strong><NavLink to="/adresses">Կապ</NavLink></strong></li>
          </ul>
          <ul className="social1">
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
      </div>
      <hr />
      <div className="container">
        <div className="copyrights">
          <span>
            {new Date().getFullYear()}
            , «Բուկինիստ» ՍՊԸ |,
          </span>
          <span>Բոլոր իրավունքները պահպանված են</span>
        </div>
      </div>

    </div>
  );
}

export default Footer;
