import { useEffect } from "react";
import { useState } from "react";


// const BASE_URL = 'https://www.omdbapi.com/?apikey=b0901f52&';



export default function Component() {

    const [movies, setMovies] = useState([]);

    const url = 'https://www.omdbapi.com/?apikey=b0901f52&s=shrek';

    function getData() {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
              setMovies(data);
              console.log(data);
            })
            .catch((error) => console.log(error));
    }


    useEffect(() => {
        getData();
      }, []);
    

    return(
        <div>
            <ul>
            {movies.map((mov, index) => {
          return <li key={index}>{mov.Title}</li>;
        })}
            </ul>  
        </div>
    );
}