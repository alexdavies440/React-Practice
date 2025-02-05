import PropTypes from 'prop-types'


export default function RemoveButton(props) {

    return(
        <button className="remove" onClick={() => props.handleClick(props.index)}>-</button>
    );
}

RemoveButton.propTypes = {
    handleClick: PropTypes.func,
    index: PropTypes.number
};