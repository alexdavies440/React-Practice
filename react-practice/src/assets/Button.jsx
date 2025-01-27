import PropTypes, { string } from 'prop-types'


export default function Button(props) {

    return(
        <button onClick={props.click}>{props.buttonText}</button>
    );
}

Button.prototypes = {
    click: PropTypes.func,
    buttonText: PropTypes.string
}