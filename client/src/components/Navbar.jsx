import React from 'react'
import Logo from '../assets/dkd.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className="container">
        <div className='logo'>
          <img src={Logo} alt="Davis Dyer Logo" />
        </div>
        <div className='links'>
          <Link className="link" to="/?cat=jesus">
            <h6>JESUS</h6>
          </Link>
          <Link className="link" to="/?cat=tech">
            <h6>Tech</h6>
          </Link>
          <Link className="link" to="/?cat=s+c">
            <h6>Society/Culture</h6>
          </Link>
          <Link className="link" to="/dyernotes">
            <h6>DyerNotes</h6>
          </Link>
          <Link className="link" to="/about">
            <h6>About Me</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span> 
          ) : (
            <Link className='link' to='/login'>Login</Link>
          )}
          <span className='write'>
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar