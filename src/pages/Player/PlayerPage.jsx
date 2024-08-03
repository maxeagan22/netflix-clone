import React, { useEffect, useState } from 'react';
import './PlayerPage.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const PlayerPage = () => {

  const { id } = useParams();

  const navigate = useNavigate()

  const [data, setData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  });

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzhhNzMzNDM5ZWMwYWQ5N2NhZTZiYzhhYjA3Zjk4MCIsIm5iZiI6MTcyMjU2MjMyMS45MzM1NSwic3ViIjoiNjZhYzM1ZmY5ZDYxNTFjOWU3NmMyYTUzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.PkDJcS3zKwfOPhngPS-OgczDXwkMsYFEuEmqcSOcnZw'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        if (response.results && response.results.length > 0) {
          setData(response.results[0]);
        } else {
          console.error('No results found');
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='playerpage'>
      <img src={back_arrow_icon} alt='' onClick={() => {navigate(-2)} }/>
      <iframe width='90%' height='90%'
       src={`https://youtube.com/embed/${data.key}`}
       title='trailer'
       frameBorder='0'
       allowFullScreen 
       />
       <div className="player info">
        <p>{data.published_at.slice(0,10)}</p>
        <p>{data.name}</p>
        <p>{data.type}</p>
      </div> 
    </div>
  );
}

export default PlayerPage;