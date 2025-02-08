import { useEffect } from "react";
import { useState } from "react";


const BASE_URL = 'https://www.omdbapi.com/?apikey=b0901f52&';



export default function Component() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    // const url = 'https://www.omdbapi.com/?apikey=b0901f52&s=shrek';

    // const url = 'https://fakestoreapi.com/products/';


    function getData() {
        fetch(BASE_URL + "s=" + search)
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
        if (search !== "") {
            getData();
        } else setMovies([]);
    }


    // useEffect(() => {
    //     getData();
    //   }, []);
    

    return(
        <div>
            <input type="text" onChange={handleChange} value={search}/>
            <button className="search-button" onClick={handleSearch}>Search</button>

            <ul>
                {movies.map((movie, id) => {
                    return <li key={id} className="list-item">
                        {movie.Title} ({movie.Year})
                        <br />
                        <img className="movie-poster" src={movie.Poster} alt="" />
                    </li>
                })}
            </ul>
        </div>
    );
}