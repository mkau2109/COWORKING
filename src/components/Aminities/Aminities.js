import React from 'react';
import { Container } from 'react-bootstrap';
import './Aminities.css';

function Aminities() {
  const amenitiesList = [
    { icon: "fa-solid fa-wind", title: "Air Conditioning" },
    { icon: "fa-solid fa-fingerprint", title: "Biometric Access" },
    { icon: "fa-solid fa-utensils", title: "Cafeteria" },
    { icon: "fa-solid fa-video", title: "CCTV Surveillance" },
    { icon: "fa-solid fa-door-open", title: "Conference Rooms" },
    { icon: "fa-solid fa-car", title: "Ample Parking Space" },
    { icon: "fa-solid fa-wifi", title: "High Speed Internet" },
    { icon: "fa-solid fa-print", title: "Printer / Scanner" },
    { icon: "fa-solid fa-bell", title: "Shared Reception" },
    { icon: "fa-solid fa-archive", title: "Storage" },
  ];

  // Duplicate the list of amenities to create a seamless loop
  const infiniteList = [...amenitiesList, ...amenitiesList];

  return (
    <section className="amenities-section">
      <Container>
        <div className="section-header text-center">
          <h2>Coworking Space Amenities</h2>
          <p>Shared office space essentials to make working a pleasure.</p>
        </div>

        <div className="slider">
          <div className="slider-track">
            {infiniteList.map((amenity, idx) => (
              <div key={idx} className="slider-item">
                <div className="amenity-icon">
                  <i className={amenity.icon}></i>
                </div>
                <h5>{amenity.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Aminities;
