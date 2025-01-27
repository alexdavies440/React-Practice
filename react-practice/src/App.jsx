import { useState } from 'react'
import './App.css'
import UserGreeting from './assets/UserGreeting'
import Button from './assets/Button'



function App() {

  const [toggle, setToggle] = useState(0);
  const [buttonText, setButtonText] = useState("Login")

  const handleChange = () => {
    

    if (toggle === 0) {
        setToggle(toggle + 1);
        setButtonText("Logout")
    }
    if (toggle === 1) {
        setToggle(toggle - 1);
        setButtonText("Login");
    }

    return toggle;
}

  return (
    <>
        <UserGreeting isLoggedIn={toggle} username="Looney" />
        <Button click={handleChange} buttonText={buttonText} />
    </>
  )
}

export default App
