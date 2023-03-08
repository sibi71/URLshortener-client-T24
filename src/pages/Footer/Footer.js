import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <p>&copy; 2023 Short URL - Tool to shorten a long link </p>
      <div className='footer__link'>
       <a href=''>Short url</a>
       <a href=''>URL click couter</a>
       <a href=''>Report</a>
       <a href=''>Terms</a>
       <a href=''>Privary</a>
       <a href=''>contact</a>
      </div>
    </div>
  )
}

export default Footer