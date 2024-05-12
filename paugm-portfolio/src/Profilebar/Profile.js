import profileimage from './profile1.jpg';


export default function Profile() {
    return (
        <div>
            <div className='profile-section1'>
                <img className='profile-img' src={profileimage} alt='#' />
                <h3>Pau GM</h3>
            </div>
        </div>
    )
}