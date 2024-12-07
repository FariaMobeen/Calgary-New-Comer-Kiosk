import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import COC_Logo from './images/logo-cityofcalgary.png';
import './App.css';
import HomePage from './pages/HomePage';
import HomePage2 from './pages/HomePage2';
import Banking from './pages/Banking';
import Transportation from './pages/Transportation';
import LanguagePage from './pages/LanguagePage';
import EmergencyServices from './pages/EmergencyServices';
import Checklist from './pages/Checklist';
import Map from './pages/Map';
import InternetPhonePlanPage from './pages/InternetPhonePlanPage';
import GovernmentServicesPage from './pages/GovernmentServicesPage';
import Resources from './pages/Resources';
import Shopping from './pages/Shopping';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header/>
        </header>

        <Routes>
          <Route path="/" element={<LanguagePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/french" element={<HomePage2 />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/emergencyservices" element={<EmergencyServices />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/map" element={<Map />} />
          <Route path="/internet" element={<InternetPhonePlanPage />} />
          <Route path="/government-services" element={<GovernmentServicesPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

