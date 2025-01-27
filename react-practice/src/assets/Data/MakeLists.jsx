import fruits from "./FruitData";
import vegetables from "./VegData";
import List from "../List";

export default function MakeLists() {

    const fruitList = <List items={fruits} category="fruits" />
    const veglist = <List items={vegetables} category="vegetables" />

    return (
        <>
            <div>{fruits.length > 0 ? fruitList : null}</div>
            <div>{vegetables.length > 0 ? veglist : null}</div>
        </>
    );
}