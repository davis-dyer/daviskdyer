import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG4 from '../../assets/portfolio4.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Check out the open sourcing of my portfolio!</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com/davis-dyer" className='btn'>Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Article about the effects of the Metaverse</h3>
          <div className="portfolio__item-cta">
            <a href="https://mwf8.substack.com/p/the-metaverse-is-now" className='btn btn-primary' target='_blank'>Read Here</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Visit my hometown!</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com/maker-dye" className='btn'>Github</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio