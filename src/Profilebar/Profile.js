import profileimage from './profile1.jpg';
import Hubspot from './tag-img/hubspot.png';
import Wordpress from './tag-img/wordpress.png';
import Html from './tag-img/html.png';
import Css from './tag-img/css.png';
import Javascript from './tag-img/javascript.png';
import Notion from './tag-img/notion.png';
import Figma from './tag-img/figma.png';
import GoogleAnalytics from './tag-img/analytics.png';
import MicrosoftExcel from './tag-img/excel.png';
import Mailchimp from './tag-img/mailchimp.png';
import AdobePhotoshop from './tag-img/photoshop.png';
import AdobeLightroom from './tag-img/lightroom.png';

export default function Profile() {
    return (
        <div className='profile-section'>
            <div className='profile-section1'>
                <img className='profile-img' src={profileimage} alt='#' />
                <h3>Pau GM</h3>
            </div>
            <p>Experienced marketing specialist with strong knowledge of web development and UX/UI design.
                Skilled in optimizing lead generation, CRM campaigns, and email marketing.
                Successfully boosted brand awareness and engagement through social media strategies and influencer partnerships.
                Ready to drive impactful marketing solutions for your team.</p>
            <div className='competencies'>
                <h4>Competencies</h4>
                <div className="experience-tags">
                    <p><img src={Hubspot} /> HubSpot</p>
                    <p><img src={Wordpress} /> Wordpress</p>
                    <p><img src={Html} /> HTML</p>
                    <p><img src={Css} /> CSS</p>
                    <p><img src={Javascript} /> JavaScript</p>
                    <p><img src={Notion} /> Notion</p>
                    <p><img src={Figma} /> Figma</p>
                    <p><img src={GoogleAnalytics} /> Google Analytics</p>
                    <p><img src={MicrosoftExcel} /> Microsoft Excel</p>
                    <p><img src={Mailchimp} /> Mailchimp</p>
                    <p><img src={AdobePhotoshop} /> Adobe Photoshop</p>
                    <p><img src={AdobeLightroom} /> Adobe Lightroom</p>
                </div>
            </div>
        </div>
    )
}