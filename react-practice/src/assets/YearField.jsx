import PropTypes from 'prop-types'


export default function YearField(props) {
    return(
        <div>
            <input type="number" value={props.carYear} onChange={props.onChange} placeholder="Enter a year" /><br />
        </div>
    )
}

YearField.propTypes = {
    carYear: PropTypes.number,
    onChange: PropTypes.func
};