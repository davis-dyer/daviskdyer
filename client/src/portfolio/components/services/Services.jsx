import React from 'react'
import './services.css'
import {TbCheck} from 'react-icons/tb'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Financial Services (CPA)</h3>
          </div>
          <ui className="service__list">
            <li>
              <TbCheck size={'3em'} className='service__list-icon' />
              <p>Planned, coordinated, and conducted financial statement audit engagements for public and privately held companies</p>
            </li>
            <li>
              <TbCheck size={'3em'} className='service__list-icon' />
              <p>Served clients across industries including: Healthcare, Fintech, Energy, Manufacturing, Hospitality, and Entertainment</p>
            </li>
            <li>
              <TbCheck size={'2em'} className='service__list-icon' />
              <p>Performed audit engagement services for a large private company acquisition</p>
            </li>
            <li>
              <TbCheck size={'2em'} className='service__list-icon' />
              <p>Prior experience as a tax preparer navigating complex tax issues</p>
            </li>
            <li>
              <TbCheck size={'1.5em'} className='service__list-icon' />
              <p>Tax preparation for basic 1040, 1095, 1120, & K1s</p>
            </li>
          </ui>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ui className="service__list">
            <li>
              <TbCheck className='service__list-icon' />
              <p>Website design with HTML, CSS & Javascript</p>
            </li>
            <li>
              <TbCheck className='service__list-icon' />
              <p>React Native mobile app deployment</p>
            </li>
            <li>
              <TbCheck className='service__list-icon' />
              <p>Ethereum decentralized app development with Solidity </p>
            </li>
            <li>
              <TbCheck className='service__list-icon' />
              <p>Back-End application deployment with C# & Node.js</p>
            </li>
            <li>
              <TbCheck className='service__list-icon' />
              <p>Data intergration in MySQL</p>
            </li>
            <li>
              <TbCheck className='service__list-icon' />
              <p>Machine learning in Python</p>
            </li>
          </ui>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ui className="service__list">
            <li>
              <TbCheck size={'2em'} className='service__list-icon' />
              <p>Written 400,000+ words for my newsletter, <i>MWF @ 8</i></p>
            </li>
            <li>
              <TbCheck size={'2em'} className='service__list-icon' />
              <p>Maintain a subscriber base and consistently publish content</p>
            </li>
            <li>
              <TbCheck size={'3.5em'} className='service__list-icon' />
              <p>Published articles on technology topics including: Blockchain, AI, Machine Learning, Cryptocurrency, DeFi, Metaverse, and DAOs</p>
            </li>
            <li>
              <TbCheck size={'1.5em'} className='service__list-icon' />
              <p>Examine society & culture trends as they happen</p>
            </li>
            <li>
              <TbCheck size={'3em'} className='service__list-icon' />
              <p>Discuss my self study of Biographies & Autobiographies on my podcast feed called <i>DyerNotes</i></p>
            </li>
          </ui>
        </article>
      </div>
    </section>
  )
}

export default Services