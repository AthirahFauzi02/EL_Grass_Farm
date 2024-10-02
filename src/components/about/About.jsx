import React from 'react'
import "./about.css";
// import AboutImg from "../../assets/turf-laying-1080x675.jpg";
import Info from  './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Us</h2>
        {/* <span className="section__subtitle"></span> */}

        <div className="about__container container grid">
          {/* <img src={AboutImg} alt="" className="about__img" /> */}
          <div className="about__date">

            <p className="about__description">Welcome to EL Grass Farm, your premier destination
            for top-quality grass solutions on Penang Island. With a
            commitment to transforming landscapes and creating lush
            green spaces, we specialize in offering a diverse range of
            premium grass varieties, including Cow Grass, Philippine
            Grass, and Japanese Grass.</p>

            <Info />
          </div>
        </div>
    </section>
  )
}

export default About
