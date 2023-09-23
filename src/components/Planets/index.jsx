import React, {useState, useEffect} from 'react';
import './style.css'

const Planets = () => {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        fetch("https://swapi.dev/api/planets")
        .then(response => response.json())
        .then(data => setPlanets(data.results)) //trva 4 vteriny
    }, [])

    return (
        <div className="planets">
            <ul>
                {planets.map((planet) => <li key={planet.name}>{planet.name}</li>)}
            </ul>
        </div>
    )
};

export default Planets;