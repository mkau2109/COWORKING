import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import './index.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Header from './components/Header/Header';
import ContactPage from './components/ContactPage/ContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import MeetingRoom from './components/About_info/MeetingRoom';
import Lounges from './components/About_info/Lounges';
import OpenDesk from './components/About_info/OpenDesk';
import Aminities from './components/Aminities/Aminities';
import Footer from './components/Footer/Footer';
import Career from './components/Career/Career';

function App() {
  return (
    <Router>
      <div>
        {/* Header will be present on all pages */}
        <Header />

        {/* Main content handled by routes */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Aminities />
              <ContactPage />
            </>
          } />

          {/* Route for individual pages */}
          <Route path="/meeting-rooms" element={<MeetingRoom />} />
          <Route path="/lounges" element={<Lounges />} />
          <Route path="/opendesk" element={<OpenDesk />} />
          <Route path="/career" element={<Career/>}/>
        </Routes>

        {/* Footer will be present on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
