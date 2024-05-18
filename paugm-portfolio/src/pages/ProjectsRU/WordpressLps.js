import React from "react";
import PowerhostImg from '../ru-images/powerhost-app.png';
import ChannelHandbook from '../ru-images/channel-handbook.png';
import StrCourse from '../ru-images/str-course.png';
import AirbnbCourse from '../ru-images/airbnb-course.png';
import SoftwareDeAlquiler from '../ru-images/software-de-alquiler.png';

export default function WordpressLps() {
    return (
        <div>
            <div className="projects-section">
                <h4>Wordpress Landing Pages</h4>
                <div className="projects-wp-all">
                    <div className="projects-wp-card">
                        <img src={PowerhostImg} alt="powerhost app img"/>
                        <div className="projects-wp-card-content">
                            <h5>Powerhost App</h5>
                            <p>Added blocks and sections with images and text using Wordpress, applying HTML and CSS. English and Spanish version.</p>
                            <a href="https://rentalsunited.com/powerhost-mobile-app/" target="_blank" rel="noreferrer"><button>View</button></a>
                        </div>
                    </div>
                    <div className="projects-wp-card">
                        <img src={ChannelHandbook} alt="channel handbook img"/>
                        <div className="projects-wp-card-content">
                            <h5>Channel Handbook</h5>
                            <p>Created landing using Wordpress page adding blocks and sections with images, text and embeded HubSpot forms applying HTML and CSS. English and Spanish version.</p>
                            <a href="https://rentalsunited.com/the-channel-handbook-lp/" target="_blank" rel="noreferrer"><button>View</button></a>
                        </div>
                    </div>
                    <div className="projects-wp-card">
                        <img src={StrCourse} alt="str revenue img"/>
                        <div className="projects-wp-card-content">
                            <h5>STR Revenue Growth Course</h5>
                            <p>Created <b>3 landing pages </b>using Wordpress, <a href="https://rentalsunited.com/vrs-course-the-str-revenue-growth-course-part-1-lp/" target="_blank" rel="noreferrer">Part 1</a>, <a href="https://rentalsunited.com/vrs-course-the-str-revenue-growth-course-part-2-lp/" target="_blank" rel="noreferrer">Part 2</a> and <a href="https://rentalsunited.com/vrs-course-the-str-revenue-growth-course-part-3-lp/" target="_blank" rel="noreferrer">Part 3</a> adding blocks, sections, embeded videos, text content, applying HTML and CSS.</p>
                            <a href="https://rentalsunited.com/vrs-course-the-str-revenue-growth-course-part-1-lp/" target="_blank" rel="noreferrer"><button>View</button></a>
                        </div>
                    </div>
                    <div className="projects-wp-card">
                        <img src={AirbnbCourse} alt="airbnb course img"/>
                        <div className="projects-wp-card-content">
                            <h5>Airbnb Course for Hosts</h5>
                            <p>Added blocks and sections with images and text using Wordpress, applying HTML and CSS.</p>
                            <a href="https://rentalsunited.com/the-airbnb-host-master-course/" target="_blank" rel="noreferrer"><button>View</button></a>
                        </div>
                    </div>
                    <div className="projects-wp-card">
                        <img src={SoftwareDeAlquiler} alt="software de alquiler img" />
                        <div className="projects-wp-card-content">
                            <h5>Software de Alquiler Vacacional</h5>
                            <p>Created a landing page using Wordpress to get leads from Spanish and Latin countries.</p>
                            <a href="https://rentalsunited.com/es/software-de-alquiler-vacacional-lp/" target="_blank" rel="noreferrer"><button>View</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}