import { useState } from "react";


export default function MyComponent() {

    const [foods, setFoods] = useState([]);

    function handleAddFood() {

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f => [...f, newFood]);

    }

    function handleRemoveFood(index) {

        setFoods(foods.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index}>
                    {food} <button onClick={() => handleRemoveFood(index)}>-</button>
                </li> )}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button id="addButton" onClick={handleAddFood}>Add Food</button>
        </div>
    );
}