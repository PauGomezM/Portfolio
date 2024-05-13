import React from "react";
import { Link } from "react-router-dom";
import WordpressLps from "./ProjectsRU/WordpressLps";

const ProjectsRu = () => {

    return (
        <div className="projects-ru">
            <Link to='/'><button>&#129028; Go back</button></Link>
            <WordpressLps/>
        </div>
    );
};

export default ProjectsRu;