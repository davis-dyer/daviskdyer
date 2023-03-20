import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsBookHalf} from 'react-icons/bs'
import {AiOutlineStock} from 'react-icons/ai'
import {BsFileEarmarkCode} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <a href="https://mwf8.substack.com/p/my-note-to-my-faith-pt-1" target='_blank'>
              <article className='about__card'>
                <BsBookHalf className='about__icon'/>
                <h5>My Story</h5>
                <small>How I discovered my Christian faith</small>
              </article>
            </a>

            <a href="#experience">
              <article className='about__card'>
                <AiOutlineStock className='about__icon'/>
                <h5>Experience</h5>
                <small>Software Developer + CPA + Content Creator</small>
              </article>
            </a>

            <a href="#portfolio">
              <article className='about__card'>
                <BsFileEarmarkCode className='about__icon'/>
                <h5>Projects</h5>
                <small>Full Stack Web Developer</small>
              </article>
            </a>
          </div>
          <p>
            Hi There! My name is Davis Dyer, and I'm humbled to tell you about my skills and experiences. Currently, I'm enrolled at Nashville Software School (NSS), where I have the opportunity of being in the Full-Stack Web Development Cohort. Upon completion of the program, I will be seeking a job as a Software Developer. 
          </p>
          <p>
            Before enrolling at NSS, I spent two years with Ernst & Young (EY) in their assurance practice. I learned the business practices of large companies across multiple industries. 
          </p>
          <p>
            In addition to my professional work, I write a newsletter called <i>MWF @ 8</i>, where I have dedicated myself to being a lifelong learner and invite readers to join me along the way. I also have a podcast titled <i>DyerNotes</i>, where I examine Biographies & Autobiographies of history's best.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About