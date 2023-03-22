import React, { useState } from 'react'
import Logo from '../assets/dkd.png'
import Avatar from '../assets/avatar.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { motion } from 'framer-motion';

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext)

  const [isMenu, setIsMenu] = useState(false)

  const navigate = useNavigate();

  const login = async () => {
    if (currentUser) {
      setIsMenu(!isMenu)
    }
  }

  return (
    <div className='navbar'>
      <div className="navbar_container">
        <div className='logo'>
          <Link to="/">
            <img src={Logo} alt="Davis Dyer Logo" />
          </Link>
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
          <Link className="link" to="/about">
            <h6>Junto</h6>
          </Link>
          <div className='profile'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              className='profile-pic'
              onClick={login}
            />
            <span>{currentUser?.username}</span>
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opactiy: 0, scale: 0.6 }}
                className='profile-menu'
              >
                <span className='write'>
                  <Link to="/write">Write</Link>
                </span>
                {currentUser ? (
                  <span onClick={logout}>Logout</span>
                ) : (
                  <Link className='link' to='/login'>Login</Link>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar