import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">EL Grass Farm</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#products" className="footer__link">Products</a>
                </li>

                <li>
                    <a href="#quotation" className="footer__link">Quotation</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="mailto:farmelgrass@gmail.com" className="footer__social-link" target="_blank">
            <i class='bx bxl-gmail'></i>
        </a>

        <a href="https://wa.me/60166464678" className="footer__social-link" target="_blank">
            <i class="bx bxl-whatsapp"></i>
        </a>
            </div>
            <span className="footer__copy">&#169; EL Grass Farm. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer