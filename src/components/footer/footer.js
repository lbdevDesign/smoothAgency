import React from 'react';
import fB from '../../assets/icon-facebook.svg';
import iG from '../../assets/icon-instagram.svg';
import tT from '../../assets/icon-twitter.svg';
import pI from '../../assets/icon-pinterest.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h2 className="footer__content--logo">SmoothAgency</h2>
        <ul className="footer__content--links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <div className="footer__content--socials">
          <a href="#facebook"><img src={fB} alt='Facebook'/></a>
          <a href="#instagram"><img src={iG} alt='Instagram'/></a>
          <a href="#twitter"><img src={tT} alt='Twitter'/></a>
          <a href="#pinterest"><img src={pI} alt='Pinterest'/></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;