import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.JPG'
import AVTR3 from '../../assets/avatar3.JPG'

// import Swiper core and required modules
import {  Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Ways of Serving</h5>
      <h2>Community Impact</h2>
      <Swiper className="faith__container"
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        <SwiperSlide className="faith">
          <div className="faith__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h4 className='faith__name'>Financial Literacy</h4>
            <small className='faith__review'>
              Promoting financial literacy across Metro Nashville Public Schools with the <a href="https://pencilforschools.org/" target='_blank'> PENCIL</a> Program.
            </small>
        </SwiperSlide>
        <SwiperSlide className="faith">
          <div className="faith__N2S">
            <img className='N2S' src={AVTR2} alt="Avatar One" />
          </div>
          <h4 className='faith__name'>Night to Shine</h4>
            <small className='faith__review'>
              Volunteer at the annual <a href="https://www.timtebowfoundation.org/ministries/night-to-shine?gclid=CjwKCAiAvK2bBhB8EiwAZUbP1LoQwx1zW-uXiVNrFgPjF_hgjf3QZa_IWCQeV5t0Qq6r4P6s-5MHnBoCnnQQAvD_BwE" target='_blank'>Tim Tebow Foundation Night to Shine</a> event.
            </small>
        </SwiperSlide>
        <SwiperSlide className="faith">
          <div className="faith__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h4 className='faith__name'>Middle School Basketball Coach</h4>
            <small className='faith__review'>
              Coached middle school boys basketball with an emphasis in life lessons learned through the sport
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials