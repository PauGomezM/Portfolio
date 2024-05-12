import Sections from "./Sections";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsRu from "./pages/ProjectsRu";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Sections />} />
          <Route path='projects-ru' element={<ProjectsRu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;