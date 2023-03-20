import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>DAVIS DYER</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#faith'>Community</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://instagram.com/davis.dyer"><BsInstagram/></a>
        <a href="http://twitter.com/DavisDyer_"><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Davis Dyer & MWF @ 8. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer