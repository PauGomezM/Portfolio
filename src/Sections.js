import Experience from "./Blocks/Experience";
import Studies from "./Blocks/Studies";
import Profile from "./Profilebar/Profile";

export default function Sections() {
    return (
        <div className="sections">
            <div className="first-section">
            <Profile/>
            </div>
            <div className="second-section">
            <Experience/>
            <Studies/>
            </div>
        </div>
    )
};