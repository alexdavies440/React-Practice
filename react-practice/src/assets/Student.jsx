import PropTypes from 'prop-types'

export default function Student(props) {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Cat: {props.isCat ? "yes" : "no"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isCat: PropTypes.bool
}

Student.defaultProps = {
    name: "Default",
    age: 0,
    isCat: false
}