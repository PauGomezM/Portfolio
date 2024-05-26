import Sections from "./Sections";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './AppMobile.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsRu from "./pages/ProjectsRu";
import ProjectsArt from "./pages/ProjectsArt";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Sections />} />
          <Route path='projects-ru' element={<ProjectsRu />} />
          <Route path='projects-art' element={<ProjectsArt/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;