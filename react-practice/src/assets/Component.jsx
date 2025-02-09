import { useEffect } from "react";
import { useState } from "react";


const url = 'http://localhost:8080/jobs'



export default function Component() {

    const [serverData, setServerData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => res.text())
        .then(data => setServerData(data));
    }, []);
    return(
        <div>
            {serverData && (
                <h1>Test: {serverData}</h1>
            )}
        </div>
    );
}