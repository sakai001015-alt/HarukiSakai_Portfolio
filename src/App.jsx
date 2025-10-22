import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import CareerPage from "./pages/CareerPage";
import SkillPage from "./pages/SkillPage";
import { ROUTES } from "./const";
import Header from "./components/Header/Header";
import ParticlesBackground from './ParticlesBackground';

function App() {
  return (
      <div className="app-container">
        <ParticlesBackground />
          <BrowserRouter>
          <div className="page">
            <Header />
            <Routes>
              {/* <Route path={ROUTES.HOME} element={<HomePage />} /> */}
              <Route path='/' element={<HomePage />} />
              <Route path={ROUTES.ABOUT} element={<AboutMePage />} />
              <Route path={ROUTES.CAREER} element={<CareerPage />} />
              <Route path={ROUTES.SKILL} element={<SkillPage />} />
            </Routes>
          </div>
          </BrowserRouter>
      </div>
      
      
  );
}
export default App;

