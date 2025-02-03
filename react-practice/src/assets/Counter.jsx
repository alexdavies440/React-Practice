import { useState } from "react";

export default function Counter() {

    const [bill, setBill] = useState();
    const [tip, setTip] = useState();

    function calculateTip(event) {
        let e = event.target.value
        setTip(e);
        setTip(e => e * 25);
        setTip(e => e / 100);
    }

    return(
        <div>
            <h2>Calculate Tip</h2>
            <label>Bill: <input onChange={calculateTip} type="number" value={bill}/></label>
            <label> Tip: {tip}</label>           
        </div>
    );
}