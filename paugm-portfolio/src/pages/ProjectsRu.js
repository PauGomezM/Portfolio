import React from "react";
import { Link } from "react-router-dom";
import WordpressLps from "./ProjectsRU/WordpressLps";
import HubspotLps from "./ProjectsRU/HubsportLps";

const ProjectsRu = () => {

    return (
        <div className="projects-ru">
            <Link to='/'><button>&#129028; Go back</button></Link>
            <WordpressLps/>
            <HubspotLps/>
        </div>
    );
};

export default ProjectsRu;