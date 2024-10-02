import React, { useState } from 'react';
import "./header.css";


const Header = () => {
    /*=========Change Background Header===================*/ 
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");

        else header.classList.remove('scroll-header');
    });

    /*=========TOGGLE MENU====================*/    
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    return (
        <header className='header'>
            <nav className="nav container">
                <a href="index.html" className="nav__logo">EL Grass Farm</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav
                                ('#home')} className={activeNav == "#home" ?  
                                "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav
                                ('#about')} className={activeNav == "#about" ?  
                                "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#products" onClick={() => setActiveNav
                                ('#products')} className={activeNav == "#products" ?  
                                "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-file-alt nav__icon"></i> Products
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#quotation" onClick={() => setActiveNav
                                ('#quotation')} className={activeNav == "#quotation" ?  
                                "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-calculator-alt nav__icon">                                  
                                </i> Quotation
                            </a>
                        </li>
                        {/* <li className="nav__item">
                            <a href="#testimonial" className="nav__link">
                                <i className="uil uil-comment-heart nav__icon">                                  
                                </i> Testimonial
                            </a>
                        </li> */}
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon">                                  
                                </i>Contact
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header