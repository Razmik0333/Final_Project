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
        </div>

        <div className="menu_bar">
          <strong><NavLink to="/about">Մեր մասին</NavLink></strong>
          <strong><NavLink to="/news">Նորություններ</NavLink></strong>
          <strong><NavLink to="/policy">Ինչպես պատվիրել</NavLink></strong>
          <strong><NavLink to="/adresses">Կապ</NavLink></strong>
        </div>
        <div className="social1">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src="icons/facebook_icon.png" className="icon" alt="" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="icons/instagram_icon.png" className="icon" alt="" />
          </a>
        </div>
      </div>

      <hr />

      <div className="container">
        <div className="copyrights">
          <span>
            &copy;
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
