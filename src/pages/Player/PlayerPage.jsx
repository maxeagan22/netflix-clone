import React from 'react'
import './PlayerPage.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const PlayerPage = () => {
  return (
    <div className='playerpage'>
      <img src={back_arrow_icon} alt=''/>
      <iframe width='90 %' height='90 %' src='http://www.youtube.com/embed/YQQD67N5pi0' title='trailer' frameBorder='0' allowFullScreen>
        <div className="player-info">
          <p>Published Date</p>
          <p>Name</p>
          <p>Type</p>
        </div>
      </iframe>
    </div>
  )
}

export default PlayerPage