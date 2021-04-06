import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './ListPrice.css';

import api from '../services/api';

const ListPrice = () => {
    const [devs, setDevs] = useState([]); 

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get(`/filter/asc`);
            
            setDevs(response.data);
        }

        loadDevs();
    }, [])

    async function handleFilter(order) {
        const response = await api.get(`/filter/${order}`);
            
        setDevs(response.data);
    }

    function handleVisitGit(user) {
        window.open(`https://github.com/${user}`, '_blank');
    }

    return (
        <div id="list-container">
            <header>
                <Link to="/">
                    <button>Voltar</button>
                </Link>
                Listagem de Devs por preço/Hora
            </header>
            <div className="filtro">
                <h5>Ordernar por:</h5>
                <select onClick={(e) => handleFilter(e.target.value)} >
                    <option value="asc">crescente</option>
                    <option value="desc">decrescente</option>
                </select>
            </div>
            <ul>
                {devs.map(dev => {
                    return (
                        <li key={dev._id} onClick={() => {handleVisitGit(dev.github_username)}}>
                            <div className="photo">
                                <img src={dev.avatar_url}/>
                            </div>
                            <div>
                                <p>{dev.name}</p>
                                <p className="bio">{dev.bio}</p>
                            </div>
                            <span>R$ {dev.price}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListPrice;