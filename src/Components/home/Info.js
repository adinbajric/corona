import React from "react";
import "./Info.css";

function Info() {
  return (
    <section className="info">
      <div className="info__container">
        <div className="info__title">
          <h3 className="title__small info__title--small">
            Coronavirus Disease (COVID-19)
          </h3>
          <h1 className="info__title--big title__big">
            Infectious disease caused by a newly coronavirus
          </h1>
        </div>
        <div className="info__text-container">
          <p className="info__text">
            Coronavirus disease (COVID-19) is an infectious disease caused by a
            newly discovered coronavirus.
            <div className="textBrake">
              Most people infected with the COVID-19 virus will experience mild
              to moderate respiratory illness and recover without requiring
              special treatment. Older people, and those with underlying medical
              problems like cardiovascular disease, diabetes, chronic
              respiratory disease, and cancer are more likely to develop serious
              illness.
            </div>{" "}
          </p>
          <p className="info__text info__text--hide">
            The best way to prevent and slow down transmission is be well
            informed about the COVID-19 virus.
            <div className="textBrake">
              Protect yourself and others from infection by washing your hands
              or using an alcohol based rub frequently and not touching your
              face. The COVID-19 virus spreads primarily through droplets of
              saliva or discharge from the nose when an infected person coughs
              or sneezes, so it’s important that you also practice respiratory
              etiquette.
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Info;
