import React from "react";
import "./projects.css";
import IMG1 from "../../assets/scr1.jpg";
import IMG2 from "../../assets/scr2.png";
import IMG3 from "../../assets/scr3.png";
import IMG4 from "../../assets/scr4.png";
import IMG5 from "../../assets/scr5.png";
import IMG6 from "../../assets/scr6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard - Cryptoverse App",
    github: "https://github.com/ervinkacar1991/Cryptoverse-app_REACTJS",
    demo: "https://cryptoverse-app-ek.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "My Admin Dashboard - Displaying the user table",
    github: "https://github.com/ervinkacar1991/my_admin_dashboardApp",
    demo: "https://ervin-kacar-dashboard.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com/ervinkacar1991/full_MERN-APP",
    demo: "https://github.com/ervinkacar1991/full_MERN-APP",
  },
  {
    id: 4,
    image: IMG4,
    title: "Income Tax Calculator",
    github: "https://github.com/ervinkacar1991/tax-calculator_salestrekker",
    demo: "https://salestrekker-tax-calculator.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto App ",
    github: "https://github.com",
    demo: "https://my-crypt0-app.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Simple Shopping Card",
    github: "https://github.com/ervinkacar1991/shopping_cart_app",
    demo: "https://simple-shopping-cart-ek.netlify.app",
  },
];

function Projects() {
  return (
    <section id="portfolio">
      <h2 className="text__title">Projects</h2>
      <h5 className="text__desc">My Recent Work</h5>
      <div className="container portfolio__containerr">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__itemm">
              <div className="portfolio__item-imagee">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-ctaa">
                <a
                  href={github}
                  className="btnn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primaryy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
