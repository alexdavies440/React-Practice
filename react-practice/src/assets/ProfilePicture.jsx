

export default function ProfilePicture() {

    const imageUrl = 'https://t3.ftcdn.net/jpg/02/70/28/30/360_F_270283056_mIQGU9YgDQEn2jHeO8Ax2eNAfOPWDahq.jpg';

    function handleClick(e) {
        e.target.style.display = "none";
    }

    return(
        <img onClick={handleClick} src={imageUrl} alt="Pensive cat" />
    )
}