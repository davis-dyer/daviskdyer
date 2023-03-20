import React from 'react'
import Edit from '../assets/edit.png'
import Delete from '../assets/delete.png'
import Avatar from '../assets/avatar.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://gracechurchanderson.com/wp-content/uploads/2016/03/leap-of-faith_724_482_80.jpg" alt="" />
        <div className="user">
          <img src={Avatar} alt="" />
          <div className="info">
            <span>Davis</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iusto pariatur in omnis explicabo quibusdam vero, repudiandae enim? Nesciunt fugiat ratione quae omnis dolorum dolore, nemo soluta expedita! Ipsum, nam?</p>
      </div>
      <Menu />
    </div>
  )
}

        export default Single