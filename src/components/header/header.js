import React, { useState } from 'react';
import burger from '../../assets/icon-hamburger.svg'

function Header() {
    const [showMenu, setMenu] = useState();

    function display() {
        setMenu(value=>!value)
      }

    return (
        <header className="header">
            <div className="header__logo">smoothAgency</div>
            <button className="header__burger" onClick={display}>
                <img src={burger} alt='menu' className='header__burger--icon'/>
            </button>
            <div className={`header__menu${showMenu?' active':null}`}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><button className="contact-button">Contact</button></li>
                </ul>
            </div>
            <div className='header__menudesk'>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><button className="header__menudesk--contact">Contact</button></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;