import React from "react";
import "./Services.css";

function Services({ showPopUp }) {
  const handleSubmit = () => {
    showPopUp();
  };
  return (
    <section className="services">
      <div className="services__about">
        <h5 className="services__title--small title__small">Services</h5>
        <h2 className="services__title--big title__big">How we can help you</h2>
        <p className="services__info">
          Our clinic provides the best medical experience for any issue at any
          time. Our 24/7 centers and expert staff handle acute medical
          emergencies and complaints in a single location with no wait.
        </p>
      </div>
      <div className="services-cards__container">
        <div className="services_card">
          <h5 className="service-card__title">COVID-19 Test</h5>
          <h1 className="service-card__price">$49.99</h1>
          <ul className="service-card__content">
            <li className="service-card__service">Quick results</li>
            <li className="service-card__service">Test lab works 24/7</li>
            <li className="service-card__service">
              Results description by our medical staff
            </li>
          </ul>
          <button onClick={handleSubmit} className="btn btn__service">
            Select Plan
          </button>
        </div>
        <div className="services_card">
          <h5 className="service-card__title title__small">Consultation</h5>
          <h1 className="service-card__price">$69.99</h1>
          <ul className="service-card__content">
            <li className="service-card__service">Visual inspection</li>
            <li className="service-card__service">Symptom check</li>
            <li className="service-card__service">
              Test results description by a medical specialist
            </li>
          </ul>

          <button onClick={handleSubmit} className="btn btn__service">
            Select Plan
          </button>
        </div>
        <div className="services_card">
          <h5 className="service-card__title title__small">Ambulance</h5>
          <h1 className="service-card__price">$99.99</h1>
          <ul className="service-card__content">
            <li className="service-card__service">
              Fully-equipped for first aid
            </li>
            <li className="service-card__service">Operates 24/7</li>
            <li className="service-card__service">
              Equipped for administering oxygen therapy
            </li>
            <li className="service-card__service">
              Modern vehicles with flashing warning lights
            </li>
            <li className="service-card__service">Fully qualified doctor</li>
          </ul>
          <button onClick={handleSubmit} className="btn btn__service">
            Select Plan
          </button>
        </div>
        <div className="services_card">
          <h5 className="service-card__title title__small">Hospitalization</h5>
          <h1 className="service-card__price">$59.99</h1>
          <ul className="service-card__content">
            <li className="service-card__service">
              Our institution providing patient treatment with specialized
              medical and nursing staff and medical equipment
            </li>
            <li className="service-card__service">Emergency department</li>
            <li className="service-card__service">Intensive care unit</li>
          </ul>
          <button onClick={handleSubmit} className="btn btn__service">
            Select Plan
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
