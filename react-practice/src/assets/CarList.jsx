import { useState } from "react";
import RemoveButton from "./RemoveButton";
import YearField from "./YearField";
import MakeField from "./MakeField";
import ModelField from "./ModelField";
import AddButton from "./AddButton";


export default function CarList() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState();
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        
        const newCar = {year: carYear, make: carMake, model: carModel}

        setCars(c => [...c, newCar]);

        setCarYear("");
        setCarMake("");
        setCarModel("")
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => 
                <li key={index}>
                    {car.year} {car.make} {car.model}
                    <RemoveButton handleClick={handleRemoveCar} index={index} />
                </li>)}
                
            </ul>
            <YearField carYear={carYear} onChange={handleYearChange} />
            <MakeField carMake={carMake} onChange={handleMakeChange} />
            <ModelField carModel={carModel} onChange={handleModelChange} />
            <AddButton onClick={handleAddCar} />
        </div>
    );
}