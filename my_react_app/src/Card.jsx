import profilePic from './assets/sky_rights.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src="{profilePic}" alt="Profile picture"></img>
            <h2 className="card-title">Joseph Del Giorgio</h2>
            <p className = "card-text">I am a student studying Move</p>
        </div>
    );
}

export default Card