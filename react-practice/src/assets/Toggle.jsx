
import { useState } from 'react'
import Button from "./Button"
import UserGreeting from "./UserGreeting"

export default function Toggle() {

    const [toggle, setToggle] = useState(false);
    const [buttonText, setButtonText] = useState("Login")

    const handleChange = () => {

        if (toggle === false) {
            setToggle(true);
            setButtonText("Logout")
        }
        if (toggle === true) {
            setToggle(false);
            setButtonText("Login");
        }
    }

    return(
        <div>
            <UserGreeting isLoggedIn={toggle} username="Looney" />
            <Button click={handleChange} buttonText={buttonText} />
        </div>
    );
}