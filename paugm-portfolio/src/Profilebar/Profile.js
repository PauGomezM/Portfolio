import profileimage from './profile1.jpg';
import Hubspot from './tag-img/hubspot.png';
import Wordpress from './tag-img/wordpress.png';
import Html from './tag-img/html.png';

export default function Profile() {
    return (
        <div className='profile-section'>
            <div className='profile-section1'>
                <img className='profile-img' src={profileimage} alt='#' />
                <h3>Pau GM</h3>
            </div>
            <p>Experienced marketing specialist proficient in web development and UX/UI design.
                Skilled in optimizing lead generation, CRM campaigns, and email marketing.
                Successfully boosted brand awareness and engagement through social media strategies and influencer partnerships.
                Ready to drive impactful marketing solutions for your team.</p>
            <div className='competencies'>
                <h4>Competencies</h4>
                <div className="experience-tags">
                    <p><img src={Hubspot}/> HubSpot</p>
                    <p><img src={Wordpress}/> Wordpress</p>
                    <p><img src={Html}/> HTML</p>
                    <p><img src={Hubspot}/> CSS</p>
                    <p><img src={Hubspot}/> JavaScript</p>
                    <p><img src={Hubspot}/> Notion</p>
                    <p><img src={Hubspot}/> Figma</p>
                    <p><img src={Hubspot}/> Google Analytics</p>
                    <p><img src={Hubspot}/> Microsoft Excel</p>
                    <p><img src={Hubspot}/> Mailchimp</p>
                    <p><img src={Hubspot}/> Adobe Photoshop</p>
                    <p><img src={Hubspot}/> Adobe Lightroom</p>
                </div>
            </div>


        </div>
    )
}