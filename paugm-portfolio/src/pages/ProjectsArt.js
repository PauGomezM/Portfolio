import React from "react";
import { Link } from "react-router-dom";
import PhotographiesArt from "./ProjectsArt/PhotographiesArt";

export default function ProjectsArt() {
    return (
        <div className="projects-art">
            <Link to='/'><button>&#129028; Go back</button></Link>
            <PhotographiesArt/>
            <Link to='/'><button>&#129028; Go back</button></Link>
        </div>
    )
}