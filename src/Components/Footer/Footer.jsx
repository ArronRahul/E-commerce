import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Frontend_Assets/logo_big.png'
import inta_icon from '../Assets/Frontend_Assets/instagram_icon.png'
import pin_icon from '../Assets/Frontend_Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Conatact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icon-container">
                <img src={inta_icon} alt=''/>
            </div>
            <div className="footer-icon-container">
                <img src={pin_icon} alt=''/>
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt=''/>
            </div>
        </div>
        <div className="footer-copyright">
           <hr />
            <p>Copyright @ 2023 - All Right Reverved</p>
        </div>


    </div>
  )
}

export default Footer