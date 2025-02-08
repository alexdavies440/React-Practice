import { useEffect } from "react";
import { useState } from "react";


const BASE_URL = 'https://www.omdbapi.com/?apikey=';

// Your API key
const API_KEY = '';



export default function Component() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    function getData() {
        fetch(BASE_URL + API_KEY + "&s=" + search)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
              setMovies(data.Search);
            })
            .catch((error) => console.log(error));
    }

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function handleSearch() {
        if (search !== '' && API_KEY !== '') {
            getData();
        } else setMovies([]);
    }

    return(
        <div>
            <input type="text" onChange={handleChange} value={search}/>
            <button className="search-button" onClick={handleSearch}>Search</button>
            <h2>{API_KEY === '' ?  "Please provide an API Key" : null}</h2>
            <ul>
                {movies.map((movie, id) => {
                    return <li key={id} className="list-item">
                        {movie.Title} ({movie.Year})
                        <br />
                        <img className="movie-poster" src={movie.Poster} alt="movie poster" />
                    </li>
                })}
            </ul>
        </div>
    );
}