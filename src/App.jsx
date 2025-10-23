import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import TopPage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import CareerPage from "./pages/CareerPage";
import SkillPage from "./pages/SkillPage";
import { ROUTES } from "./const";
import Header from "./components/Header/Header";
import ParticlesBackground from './ParticlesBackground';

const APP_NAME = "HarukiSakai_Portfolio";
function App() {
  return (
      <div className="app-container">
        <ParticlesBackground />
          <BrowserRouter>
          <div className="page">
            <Header />
            <Routes>
              <Route path={APP_NAME + '/'} element={<HomePage />} />
              <Route path='/about' element={<AboutMePage />} />
              <Route path='/career' element={<CareerPage />} />
              <Route path='/skill' element={<SkillPage />} />
            </Routes>
          </div>
          </BrowserRouter>
      </div>
  );
}
export default App;