import React from "react";
import { Link } from "react-router-dom";
import "./FAQ.css";
import Images from "./Images";

function FAQ() {
  return (
    <div className="FAQ">
      <h3 className="title__small FAQ__heading--small">FAQ</h3>
      <h1 className="title__big FAQ__title--big">We're here to help you</h1>
      <div className="FAQ__container FAQ__container1">
        <h3 className="title__small FAQ__title--small">
          Q: What is a coronavirus?
        </h3>
        <p className="text__info FAQ__info">
          A: Coronaviruses are a large family of viruses which may cause illness
          in animals or humans. In humans, several coronaviruses are known to
          cause respiratory infections ranging from the common cold to more
          severe diseases such as Middle East Respiratory Syndrome (MERS) and
          Severe Acute Respiratory Syndrome (SARS). The most recently discovered
          coronavirus causes coronavirus disease COVID-19.
        </p>
        <h3 className="title__small FAQ__title--small">Q: What is COVID-19?</h3>
        <p className="text__info FAQ__info">
          A: COVID-19 is the infectious disease caused by the most recently
          discovered coronavirus. This new virus and disease were unknown before
          the outbreak began in Wuhan, China, in December 2019.
        </p>
        <h3 className="title__small FAQ__title--small">
          Q: What are the symptoms of COVID-19?
        </h3>
        <p className="text__info FAQ__info">
          A: The most common symptoms of COVID-19 are fever, tiredness, and dry
          cough. Some patients may have aches and pains, nasal congestion, runny
          nose, sore throat or diarrhea. These symptoms are usually mild and
          begin gradually. Some people become infected but don’t develop any
          symptoms and don't feel unwell.
        </p>
        <h3 className="title__small FAQ__title--small">
          Q: Should I worry about COVID-19?
        </h3>
        <p className="text__info FAQ__info">
          A: Illness due to COVID-19 infection is generally mild, especially for
          children and young adults. However, it can cause serious illness:
          about 1 in every 5 people who catch it need hospital care. It is
          therefore quite normal for people to worry about how the COVID-19
          outbreak will affect them and their loved ones.
        </p>
      </div>
      <div className="FAQ__container FAQ__container2">
        <h3 className="title__small FAQ__title--small">
          Q: Who is at risk of developing severe illness?
        </h3>
        <p className="text__info FAQ__info">
          A: While we are still learning about how COVID-2019 affects people,
          older persons and persons with pre-existing medical conditions (such
          as high blood pressure, heart disease, lung disease, cancer or
          diabetes) appear to develop serious illness more often than others.
        </p>
        <h3 className="title__small FAQ__title--small">
          Q: Is COVID-19 the same as SARS?
        </h3>
        <p className="text__info FAQ__info">
          A: No. The virus that causes COVID-19 and the one that caused the
          outbreak of Severe Acute Respiratory Syndrome (SARS) in 2003 are
          related to each other genetically, but the diseases they cause are
          quite different.
          <div className="textBrake">
            SARS was more deadly but much less infectious than COVID-19. There
            have been no outbreaks of SARS anywhere in the world since 2003.
          </div>
        </p>
        <h3 className="title__small FAQ__title--small">
          Q: How long is the incubation period for COVID-19?
        </h3>
        <p className="text__info FAQ__info">
          A: The “incubation period” means the time between catching the virus
          and beginning to have symptoms of the disease. Most estimates of the
          incubation period for COVID-19 range from 1-14 days, most commonly
          around five days. These estimates will be updated as more data become
          available.
        </p>
      </div>
      <div className="btn__FAQ">
        <Link
          to={{
            pathname:
              "https://www.who.int/emergencies/diseases/novel-coronavirus-2019",
          }}
          target="_blank"
        >
          <button className="btn btn__FAQ">Learn More</button>
        </Link>
      </div>
    </div>
  );
}

export default FAQ;
