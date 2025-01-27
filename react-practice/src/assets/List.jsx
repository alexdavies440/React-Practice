import PropTypes from 'prop-types'

export default function List(props) {

    const itemList = props.items

    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    itemList.sort((a, b) => a.calories - b.calories)

    const lowCalFruits = itemList.filter(fruit => fruit.calories < 100);

    const highCalFruits = itemList.filter(fruit => fruit.calories >= 100);

    const listItems = itemList.map(fruit => <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.calories}</b></li>);

    return (
        <div>
            <h1 className="list-category">{props.category}</h1>
            <ul className="list-items">
                {listItems}
            </ul>
        </div>


    );
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    })),
    category: PropTypes.string
}