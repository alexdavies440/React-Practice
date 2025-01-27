
export default function UserGreeting(props) {

    return(props.isLoggedIn === 1 ? <h2>Welcome {props.username}</h2> : <h2>Please log in to continue</h2>);
}