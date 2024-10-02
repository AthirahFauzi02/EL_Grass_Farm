import React, { useState } from "react";
import "./products.css";
import rumput1 from '/Users/athirahahmadfauzi/Documents/IMPORTANT DOCUMENT/Zeqes-Landscape/zeqes/src/assets/rumput1.jpeg';
import rumput2 from '/Users/athirahahmadfauzi/Documents/IMPORTANT DOCUMENT/Zeqes-Landscape/zeqes/src/assets/rumput2.jpeg';
import rumput3 from '/Users/athirahahmadfauzi/Documents/IMPORTANT DOCUMENT/Zeqes-Landscape/zeqes/src/assets/rumput3.jpeg';

const Products = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return(
        <section className="products section" id="products">
            <h2 className="section__title">Products</h2>
            {/* <span className="section__subtitle"></span> */}

            <div className="products__container container grid">
                <div className="products__content">
                    <div className="products__info">
                    <img src={rumput3} alt="Product List" className="products__image" />
                    <h3 className="products__title">Cow <br /> Grass</h3>
                    <p className="product__desc">Axonopus Compressus</p>
                </div>
                

                <span className="products__button" onClick={() => toggleTab(1)}>
                    RM1.5/sqft
                {/* <i className="uil uil-arrow-right
                products__button-icon"></i> */}
                </span>

                {/* <div className={toggleState === 1 ? "products__modal active-modal" : "products__modal"}>
                    <div className="products__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times
                        products__modal-close"></i>

                        <h3 className="products__modal-title">Cow Grass</h3>
                        <p className="products__modal-description">Letak slider gambar</p>

                        <ul className="products__modal-products grid">
                            <li className="products__modal-product">
                                <i className="uil uil-check-circle products__modal-icon"></i>
                                <p className="products__modal-info">Cow Grass bla bla bla bla</p>
                            </li>

                            <li className="products__modal-product">
                                <i className="uil uil-check-circle
                                products__modal-icon"></i>
                                <p className="products__modal-info">Philipines Grass bla bla bla bla</p>
                            </li>
 
                            <li className="products__modal-product">
                                <i className="uil uil-check-circle
                                products__modal-icon"></i>
                                <p className="products__modal-info">Japanese Grass bla bla bla bla</p>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>


            <div className="products__content">
                    <div className="products__info">
                    <img src={rumput1} alt="Product List" className="products__image" />
                    <h3 className="products__title">Philippine <br /> Grass</h3>
                    <p className="product__desc">Zoysia Matrella</p>
                </div>
                

                <span className="products__button">RM2.5/sqft
                {/* <i className="uil uil-arrow-right products__button-icon"></i> */}
                </span>

                {/* <div className="products__modal">
                    <div className="products__modal-content">
                        <i className="uil uil-times
                        products__modal-close"></i>

                        <h3 className="products__modal-title">helloo</h3>
                        <p className="products__modal-description">qwertyytrew</p>

                        <ul className="products__modal-products grid">
                            <li className="products__modal-products">
                                <i className="uil uil-check-circle
                                products__modal-icon"></i>
                                <p className="products__modal-info">Cow Grass hehehehehe</p>
                            </li>

                            <li className="products__modal-products">
                                <i className="uil uil-check-circle
                                products__modal-icon"></i>
                                <p className="products__modal-info">Philipines Grass hehehehe</p>
                            </li>
 
                            <li className="products__modal-products">
                                <i className="uil uil-check-circle
                                products__modal-icon"></i>
                                <p className="products__modal-info">Japanese Grass hehehehe</p>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>

            <div className="products__content">
                    <div className="products__info">
                        <img src={rumput2} alt="Product List" className="products__image" />
                        <h3 className="products__title">Japanase <br /> Grass</h3>
                        <p className="product__desc">Zoysia Japonica</p>
                </div>
                

                <span className="products__button">RM3.50/sqft
                {/* <i className="uil uil-arrow-right
                products__button-icon"></i> */}
                </span>

                {/* <div className="products__modal">
                    <div className="products__modal-content">
                        <i className="uil uil-times
                        products__modal-close"></i>

                        <h3 className="products__modal-title">apa apa jr</h3>
                        <p className="products__modal-description">fhskdgfisgfgfisdfgsifg</p>

                        <ul className="products__modal-products grid">
                            <li className="products__modal-products">
                                <i className="uil uil-check-circle
                                products__modal-icon"></i>
                                <p className="products__modal-info">Cow Grass bla bla bla bla</p>
                            </li>

                            <li className="products__modal-products">
                                <i className="uil uil-check-circle
                                products__modal-icon"></i>
                                <p className="products__modal-info">Philipines Grass bla bla bla bla</p>
                            </li>
 
                            <li className="products__modal-products">
                                <i className="uil uil-check-circle
                                products__modal-icon"></i>
                                <p className="products__modal-info">Japanese Grass bla bla bla bla</p>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
            </div>
            <div className="product__note">
                <p className="product__note-title">*The price does not cover the installation service charge, which varies depending on the type of grass selected.</p>
            </div>
        </section>
    )
};

export default Products