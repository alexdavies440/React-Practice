import PropTypes, { string } from 'prop-types'

export default function UserGreeting(props) {

    const welcomeMessage = <h2>Welcome {props.username}</h2>
    const loginPrompt = <h2>Please log in to continue</h2>

    return(props.isLoggedIn === true ? welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool
}