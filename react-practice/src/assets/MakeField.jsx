import PropTypes from 'prop-types'


export default function MakeField(props) {
    return(
        <div>
            <input type="text" value={props.carMake} onChange={props.onChange} placeholder="Enter car make" /><br />
        </div>
    );
}

MakeField.propTypes = {
    carMake: PropTypes.string,
    onChange: PropTypes.func
};