import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './style.css';

export default function DevForm({onSubmit}) {
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {latitude, longitude} = position.coords;
    
            setLatitude(latitude);
            setLongitude(longitude);
          }, 
          (err) => {
            console.log(err);
          },{
            timeout: 30000
          }
        );
    }, [])

    async function  handleSubmit(e) {
      e.preventDefault();
      await onSubmit({
          github_username,
          techs,
          price,
          latitude,
          longitude
        });

      setGithubUsername('');
      setTechs('');
      setPrice('');
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Preço por hora</label>
            <input
              name="price"
              id="price"
              required
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">longitude</label>
              <input 
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>

          <div className="link-list">
            <Link to="/devs">
              <button>Ver lista de Devs por preço</button>
            </Link>
          </div>
        </form>
    )
}