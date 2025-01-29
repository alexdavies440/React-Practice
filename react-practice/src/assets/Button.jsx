

export default function Button() {
    
    function handleClick(e) {
        if (e.target.textContent === "WHOA") {
        e.target.textContent = "WHOA WHOA";
    } else {
        e.target.textContent = "WHOA";
    }
    }
    return(
        <button onClick={(e) => handleClick(e)}>Click me</button>
    );
}