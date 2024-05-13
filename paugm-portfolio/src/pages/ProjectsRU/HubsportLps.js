import TySeoGuide from '../ru-images/ty-seo-guide.png';
import TyCommonProblems from '../ru-images/ty-common-problems.png';
import TyChannelHandbook from '../ru-images/ty-channel-handbook.png';
import CapterraRentalsUnited from '../ru-images/capterra-rentals-united.png';

export default function HubspotLps() {
    return (
        <div>
            <div className="projects-section">
                <h4>HubSpot Landing Pages</h4>
                <div className="projects-wp-all">
                    <div className="projects-wp-card">
                        <img src={CapterraRentalsUnited} alt="capterra img" />
                        <div className="projects-wp-card-content">
                            <h5>Rentals United on Capterra</h5>
                            <p>Created a landing page to showcase it on Capterra having generated  +1000 views and +50 leads in 6 months. English and Spanish version.</p>
                            <a href="https://info.rentalsunited.com/capterra-lp-en" target="_blank" rel="noreferrer"><button>View</button></a>
                        </div>
                    </div>
                    <div className="projects-wp-card">
                        <img src={TySeoGuide} alt="seo guide img" />
                        <div className="projects-wp-card-content">
                            <h5>SEO Guide</h5>
                            <p>Created a "thank you" landing page using HubSpot to be displayed whenever someone submits a form to download this resource.</p>
                            <a href="https://info.rentalsunited.com/seoguide-blogdownload-thankyou" target="_blank" rel="noreferrer"><button>View</button></a>
                        </div>
                    </div>
                    <div className="projects-wp-card">
                        <img src={TyChannelHandbook} alt="channelhandbook img" />
                        <div className="projects-wp-card-content">
                            <h5>Channel Handbook</h5>
                            <p>Created a "thank you" landing page using HubSpot to be displayed whenever someone submits a form to download this resource. English and Spanish version.</p>
                            <a href="https://info.rentalsunited.com/channelhandbook-download-en-thankyou" target="_blank" rel="noreferrer"><button>View</button></a>
                        </div>
                    </div>
                    <div className="projects-wp-card">
                        <img src={TyCommonProblems} alt="common problems img" />
                        <div className="projects-wp-card-content">
                            <h5>The 6 biggest hosting challenges</h5>
                            <p>Created a "thank you" landing page using HubSpot to be displayed whenever someone submits a form to download this resource.</p>
                            <a href="https://info.rentalsunited.com/commonproblems-blogdownload-thankyou" target="_blank" rel="noreferrer"><button>View</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}