import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from "./pages/HomePage";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Routes>
    <Route path={ROUTES.HOME} element={<HomePage />} />
    </Routes>
  </StrictMode>
)