import { useEffect } from "react";
import { useState } from "react";


const url = 'http://localhost:8080/test'



export default function Component() {

    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setServerData(data));
    }, []);

    return(
        <div>
            <h1>Events</h1>
            <hr />
            <div>{serverData.map((item) => {
                return (
                    <div>
                    <h3>{item.name}</h3>
                        <ul>
                            <li>Description: {item.description}</li>
                            <li>Type: {item.type.toLowerCase()}</li>
                        </ul>
                        </div>
                )
            })}</div>
        </div>
    );
}