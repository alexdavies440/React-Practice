import PropTypes from 'prop-types'


export default function ModelField(props) {
    return(
        <div>
            <input type="text" value={props.carModel} onChange={props.onChange} placeholder="Enter car model" /><br />
        </div>
    );
}

ModelField.propTypes = {
    carModel: PropTypes.string,
    onChange: PropTypes.func
};