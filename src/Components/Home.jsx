import React, {useEffect, useState} from 'react'
import Search from './Search';
import Card from './Card';
import './Home.css';

const Home = () => {
    const [movies,setMovies] = useState([]);
    const titleMovie = [...movies]
    let titles = [];
    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=11efa01bafde71e3a785712f8e268d70"
    
    useEffect(() => {
        fetch(API_URL)
        .then (res => res.json())
        .then(data => {
            setMovies(data.results);
        })
        
    },
    []);
    titles=titleMovie.map((req) => req.title);
    

    return (
        <div className="home">
            <Search titles={titles} />
        <div className="home_card">
                {movies.map((movieReq) => <Card key={movieReq.id} {...movieReq} />)}
        </div>
            
        </div>
    )
}

export default Home
