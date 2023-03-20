import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'
import {SiLinkedin} from 'react-icons/si'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>davis.dyer10@gmail.com</h5>
            <a href="mailto:davis.dyer10@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@davisdyer_</h5>
            <a href="https://twitter.com/DavisDyer_" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <SiLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>@davis-dyer-1</h5>
            <a href="https://www.linkedin.com/in/davis-dyer1/" target='_blank'>Send a message</a>
          </article>
        </div>
        <form actions="">
          <input type="text" name="text" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}


export default Contact