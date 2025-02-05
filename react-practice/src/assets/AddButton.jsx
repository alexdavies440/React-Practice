import PropTypes from 'prop-types'

export default function AddButton(props) {
    return(
        <button onClick={props.onClick}>Add Car</button>
    );
}

AddButton.propTypes = {
    onClick: PropTypes.func
};

