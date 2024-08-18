import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './TitleCards.css'

const TitleCards = ({ title, category }) => {

  const [data, setData] = useState([])

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_BEARER_TOKEN}`
    }
  };
  

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing' }?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setData(response.results))
    .catch(err => console.error(err));

    const cardsElement = cardsRef.current;
    if (cardsElement) {
      cardsElement.addEventListener('wheel', handleWheel);
    }
    // Cleanup event listener on unmount
    return () => {
      if (cardsElement) {
        cardsElement.removeEventListener('wheel', handleWheel);
      }
    }
  }, []);

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {data.map((card, index) => (
          <Link to={`/player/${card.id}`}className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt={card.name} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards