import React from 'react'
import './HomePage.css'
import NavBar from '../../components/NavBar/NavBar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from  '../../assets/hero_title.png'

const HomePage = () => {
  return (
    <div className='homepage'>
      <NavBar />
      <div className="hero">
        <img src={hero_banner} className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man
            living in modern Istanbul embarks on a quest to save the city
            from an immortal enemy. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage