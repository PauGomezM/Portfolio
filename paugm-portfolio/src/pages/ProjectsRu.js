import React from "react";
import { Link } from "react-router-dom";
import PowerhostImg from './ru-images/powerhost-app.png';
import ChannelHandbook from './ru-images/channel-handbook.png';
import StrCourse from './ru-images/str-course.png';

const ProjectsRu = () => {

    return (
        <div className="projects-ru">
            <Link to='/'><button>&#129028; Go back</button></Link>
            <div className="projects-wp-section">
                <h4>Landing pages created using Wordpress</h4>
                <div className="projects-wp-all">
                    <div className="projects-wp-card">
                        <img src={PowerhostImg} alt="powerhost app img"/>
                        <div className="projects-wp-card-content">
                            <h5>Powerhost App</h5>
                            <p>Added blocks and sections with images and text using HTML and CSS. English and Spanish version.</p>
                            <a href="https://rentalsunited.com/powerhost-mobile-app/" target="_blank" rel="noreferrer"><button>View</button></a>
                        </div>
                    </div>
                    <div className="projects-wp-card">
                        <img src={ChannelHandbook} alt="channel handbook img"/>
                        <div className="projects-wp-card-content">
                            <h5>Channel Handbook</h5>
                            <p>Created landing page adding blocks and sections with images, text and embeded HubSpot forms using HTML and CSS. English and Spanish version.</p>
                            <a href="https://rentalsunited.com/the-channel-handbook-lp/" target="_blank" rel="noreferrer"><button>View</button></a>
                        </div>
                    </div>
                    <div className="projects-wp-card">
                        <img src={StrCourse}/>
                        <div className="projects-wp-card-content">

                            <h5>STR Revenue Growth Course</h5>
                            <p>Created 3 landing pages, Part 1, Part 2 and Part 3 adding blocks, sections, embeded videos, text content, using HTML and CSS.</p>
                            <a href="https://rentalsunited.com/vrs-course-the-str-revenue-growth-course-part-1-lp/" target="_blank" rel="noreferrer"><button>View</button></a>
                        </div>
                    </div>
                    <div className="projects-wp-card">
                        <img />
                        <div className="projects-wp-card-content">
                            <h5>Lorem ipsum</h5>
                            <p>Lorem ipsum lorem ipsum</p>
                            <a href="" target="_blank" rel="noreferrer"><button>View</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsRu;