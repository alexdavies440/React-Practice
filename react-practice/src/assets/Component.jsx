import { useEffect } from "react";
import { useState } from "react";


const url = 'http://localhost:8080/test/movies'



export default function Component() {

    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setServerData(data));
    }, []);

    return(
        <div>
            <h1>Movies</h1>
            <hr />
            <div>{serverData.map((item) => 

                    <div key={item.id}>
                    <h3>{item.name}</h3>
                        <ul>
                            <li>Year: {item.year}</li>
                            <li>Director: {item.director}</li>
                            <li>Plot: {item.plot.toLowerCase()}</li>
                        </ul>
                        </div>
                
            )}</div>
        </div>
    );
}