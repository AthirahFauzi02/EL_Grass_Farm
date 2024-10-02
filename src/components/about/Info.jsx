import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i class='bx bx-world about__icon'></i>

        <h3 className="about__title">Provide grass</h3>
          <span className="about__subtitle">We provide various grass</span>
      </div>

      <div className="about__box">
      <i class='bx bx-wrench about__icon'></i>

        <h3 className="about__title">Turf Installation</h3>
          <span className="about__subtitle">We prepare and install turf</span>
      </div>
      
      <div className="about__box">
      <i class='bx bxs-truck about__icon'></i>

        <h3 className="about__title">Delivery</h3>
          <span className="about__subtitle">We deliver grass to your doorstep</span>
      </div>

    </div>
  )
}

export default Info
