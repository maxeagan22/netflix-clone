import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({ title, category }) => {

  const [data, setData] = useState([])

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzhhNzMzNDM5ZWMwYWQ5N2NhZTZiYzhhYjA3Zjk4MCIsIm5iZiI6MTcyMjU2MjMyMS45MzM1NSwic3ViIjoiNjZhYzM1ZmY5ZDYxNTFjOWU3NmMyYTUzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.PkDJcS3zKwfOPhngPS-OgczDXwkMsYFEuEmqcSOcnZw'
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