import profileimage from './profile1.jpg';


export default function Profile() {
    return (
        <div>
            <div className='profile-section1'>
                <img className='profile-img' src={profileimage} alt='#' />
                <h3>Pau GM</h3>
            </div>
            <p>Experienced marketing specialist proficient in web development and UX/UI design. 
            Skilled in optimizing lead generation, CRM campaigns, and email marketing. 
            Successfully boosted brand awareness and engagement through social media strategies and influencer partnerships. 
            Ready to drive impactful marketing solutions for your team.</p>

        </div>
    )
}