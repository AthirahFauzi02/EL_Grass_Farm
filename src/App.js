import React from 'react';
import "./App.css";
import Header from './components/headers/header';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/product/Products';
import Quotation from './components/quotation/Quotation';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
    return (
        <>
        <Header />

        <main className= 'main'>
            <Home />
            <About />
            <Products/>
            <Quotation/>
            <Contact/>
            
        </main>

        <Footer/>
        <ScrollUp/>
        </>
    )
}

export default App