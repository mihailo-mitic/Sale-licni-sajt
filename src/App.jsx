import "./App.css";
import LandingPage from "./pages/LandingPage";
import BiographyPage from "./pages/BiographyPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='root-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/biography' element={<BiographyPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
