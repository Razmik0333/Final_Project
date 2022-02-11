import React from "react";
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className='container'>
                <div className='logo'>
                    <a href='https://books.am/am'>
                        <img src="https://books.am/media/logo/stores/1/main_logo.png" alt="logo" />
                    </a>

                    <ul className='menu_bar'>
                        <li><strong><a href='/about'>Մեր մասին</a></strong></li>
                        <li><strong><a href='/news'>Նորություններ</a></strong></li>
                        <li><strong><a href='/policy'>Ինչպես պատվիրել</a></strong></li>
                        <li><strong><a href='/faq'>Հաճախ տրվող հարցեր</a></strong></li>
                        <li><strong><a href='/adresses'>Կապ</a></strong></li>
                    </ul>
                    <ul className='social'>
                        <li>
                            <a href='https://www.facebook.com/' target="_blank" rel="noreferrer">
                                <img src="icons/facebook_icon.png" className='icon' alt="" />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">
                                <img src="icons/instagram_icon.png" className='icon' alt="" />
                            </a>
                        </li>
                    </ul>
                </div>

                <hr />

                <div className='copyrights'>
                    <span>&copy; {new Date().getFullYear()}, &copy; «Բուկինիստ» ՍՊԸ |, </span>
                    <span>Բոլոր իրավունքները պահպանված են</span>

                </div>
            </div>
        </div>
    )
}

export default Footer;