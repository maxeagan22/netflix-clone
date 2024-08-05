import React from 'react'
import facebookIcon from '../../assets/facebook_icon.png'
import instagramIcon from '../../assets/instagram_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
import youtubeIcon from '../../assets/youtube_icon.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebookIcon} alt='Facebook Icon'/>
        <img src={instagramIcon} alt='Instagram Icon'/>
        <img src={twitterIcon} alt='Twitter Icon'/>
        <img src={youtubeIcon} alt='Youtube Icon'/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center </li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corportate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>
      © 1997-2023 Netflix, Inc.
      </p>
    </div>
  )
}

export default Footer