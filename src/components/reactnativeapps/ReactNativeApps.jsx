import React from "react";
import "./reactnativeapps.css";

const ReactNativeApps = () => {
  return (
    <section id="portfolio">
      <h2 className="text__title">Projects</h2>
      <h5 className="text__desc">My Recent Work</h5>
      <h2>React Native Apps</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <h3>Habbits Tracker</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.habitstracker.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Download Link
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <h3>Quiz "Pitaj ucene"</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.pitajucene.kviz"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Download Link
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <h3>My Social Media App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ervinkacar1991/RN-social_media"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub code
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <h3>mSufara</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.sufara.moja"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Download Link
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ReactNativeApps;
