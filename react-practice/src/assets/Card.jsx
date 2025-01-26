import profilePic from './looney.jpg'

export default function Card() {

    return(
        <div className="card">
            <img src={profilePic} alt="profile picture" id="looney" className='card-image'/>
            <h2 className='card-title'>Looney</h2>
            <p className="card-text" >American Shorthair</p>
        </div>
    );
}