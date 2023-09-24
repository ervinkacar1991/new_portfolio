import React, { useState } from "react";
import "./portfolio.css";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My projects and experience</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Developer
            </h3>
          </div>
          <span className="span services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Frontend Developer</h3>
              <h4 className="services__modal-description">Centar Nit</h4>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Designed and developed user-friendly, visually appealing,
                    and high-performing web applications using industry-leading
                    frameworks such as React JS and React Native.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Successfully delivered three production-ready applications,
                    showcasing my ability to meet client requirements and
                    achieve their business goals.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Spearheaded the development of a social media application,
                    taking ownership of the project and driving it towards
                    successful completion.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Collaborated closely with cross-functional teams, including
                    designers and backend developers, to ensure seamless
                    integration and optimal user experiences.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Utilized my solid background in frontend development to
                    write clean, efficient, and maintainable code.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Actively expanding my skillset by learning Node.js
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Familiar with agile development methodologies, enabling me
                    to adapt quickly to changing project requirements and
                    deliver results within tight deadlines.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>

            <h3 className="services__title">
              Ministry of Public
              <br /> Administration
            </h3>
          </div>
          <span className="span services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">
                Ministry of Public Administration
              </h3>
              <h4 className="services__modal-description">
                Ministry of Serbia{" "}
              </h4>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <p className="services__modal-info">
                    As an intern in the Department of Public Administration and
                    Local Self-Government, I work in the sector of public and
                    e-government. My job focuses on supporting the development
                    and implementation of public and egovernment services to
                    improve the quality and efficiency of public administration.
                    This includes analyzing and developing e-government
                    services, evaluating public services, providing support to
                    users of e-government services, and staying up to date on
                    relevant laws and regulations related to public and
                    e-government.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Tutor</h3>
          </div>
          <span className="span services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Tutor at Centar NIt</h3>
              <h4 className="services__modal-description">Centar Nit </h4>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <p className="services__modal-info">
                    As a frontend lecturer, my job focuses on teaching HTML,
                    CSS, JavaScript, ReactJS, and Redux to students. I prepare
                    and deliver lectures on these technologies, develop
                    curriculums and materials for lectures and exercises,
                    evaluate student work and provide feedback, and stay
                    up-to-date on the latest trends and innovations in web
                    technologies. I collaborate with other lecturers and teams
                    to ensure the quality of the teaching process
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
