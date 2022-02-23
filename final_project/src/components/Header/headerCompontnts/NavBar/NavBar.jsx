import { NavLink } from 'react-router-dom';

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
          <NavLink to="/about"> Մեր մասին </NavLink>
          <NavLink to="/news"> Նորություններ </NavLink>
          <NavLink to="/faq"> Հաճախ տրվող հարցեր </NavLink>
          {/* <NavLink to="/blog"> Բլոգ </NavLink> */}
        </div>
        <div className=" selected">
          <select className="select" name="change" id="change">
            <option value="AMD"> AMD </option>
            <option value="RUB"> RUB </option>
            <option value="USD"> USD </option>
          </select>
          <select className="select" name="language" id="language">
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
