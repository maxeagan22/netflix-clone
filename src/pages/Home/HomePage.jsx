import React from 'react'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import info_icon from '../../assets/info_icon.png'
import play_icon from '../../assets/play_icon.png'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import TitleCards from '../../components/TitleCards/TitleCards'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='homepage'>
      <NavBar />
      <div className="hero">
        <img src={hero_banner} alt ="Hero Banner" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt ="Hero Caption" className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man
            living in modern Istanbul embarks on a quest to save the city
            from an immortal enemy. 
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="Play Icon"/> Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="Info Icon"/> More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={'Blockbuster Movies'} category={"top_rated"}/>
        <TitleCards title={'Only On Netflix'} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks For You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage