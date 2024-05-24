import React from "react";
import { Link } from "react-router-dom";
import PhotographiesArt from "./ProjectsArt/PhotographiesArt";
import CopywritingArt from "./ProjectsArt/CopywritingArt";

export default function ProjectsArt() {
    return (
        <div className="projects-art">
            <Link to='/'><button>&#129028; Go back</button></Link>
            <PhotographiesArt/>
            <CopywritingArt/>
            <Link to='/'><button>&#129028; Go back</button></Link>
        </div>
    )
}