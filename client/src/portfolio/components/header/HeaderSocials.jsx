import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiSubstack} from 'react-icons/si'
import { BsSpotify } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/davis-dyer1' target='blank'><BsLinkedin/></a>
        <a href='https://github.com/davis-dyer' target='blank'><FaGithub/></a>
        <a href='https://mwf8.substack.com/' target='blank'><SiSubstack/></a>
        <a href='https://open.spotify.com/show/3Ydr60hykMtQzr9fFYgESr?si=49fc2b245cf94d6b' target='blank'><BsSpotify/></a>
    </div>
  )
}

export default HeaderSocials