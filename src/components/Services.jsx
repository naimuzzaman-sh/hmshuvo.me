import React from "react";
import img from "../assets/images/Group 3.svg";
import about01 from "../assets/images/about1.png";
import about04 from "../assets/images/about4.png";
import fast from "../assets/images/fast.png";
import responsive from "../assets/images/responsive.png";
import resume from "../assets/resume/myresume.pdf";

import {
  ServicesDetailsStyles,
  ServicesStyles,
} from "../styles/ServicesStyles";

const serviceDetails = [
  {
    image: about01,
    header: "Front End Development",
    details:
      "First impression always prevails! It will dramatically increase your chance to gain potential clients and customers if the front-end of your website is appealing. With cutting edge design and eye-catching appearance, I will make sure that your apps and websites stands out!",
  },

  {
    image: about04,
    header: "Back End Development",
    details:
      "While the front-end helps you gain customers, it's the backend of your website that makes sure you can retain them. From database management to real-time communication, from user security to scalable and maintainable infrastructure, I will provide everything you need to build up a solid backend system that will keep your user retention rate all-time high.",
  },
  {
    image: fast,
    header: "Fast & Secure Websites",
    details:
      "When it comes modern web development, there should be no compromise with performance and security. Our whole industry depends on it. By leveraging the most up-to-date technologies and methods like incremental static regeneration (ISR), code splitting, advance image optimization and more, I make sure that the your websites are super fast! And by integrating standard OAuth and token based authentication system, I will see to it that your site is safe and secure",
  },
  {
    image: responsive,
    header: "Cross platform mobile and desktop app",
    details:
      "With the rise of mobile and desktop apps, it has become essential to develop app that can run on multiple platform. By using the latest technology like React Native, Tauri and more, I will make sure that your app can run on both iOS, Android, desktop platforms without any performance degradation.",
  },
];

const Services = () => {
  return (
    <div className="page" id="services">
      <div className="border-area">
        <ServicesStyles className="page-title">
          <img src={img} className="image-3d" />
          <div className="title">
            <h3 className="gradient">
              My awesome
              <br />
              Services
            </h3>
            <p className="styled">
              I always strive to deliver the best user experience!
            </p>
            <a href={resume} download="hmshuvo_resume.pdf" className="btn">
              <span>Resume</span>
            </a>
          </div>
        </ServicesStyles>
        <ServicesDetailsStyles>
          {serviceDetails.map(({ image, header, details }, i) => (
            <div className="services_item" key={i}>
              <div className="image">
                <img src={image} alt={header} />
              </div>
              <div className="details">
                <h3>{header}</h3>
                <p>{details}</p>
              </div>
            </div>
          ))}
        </ServicesDetailsStyles>
      </div>
    </div>
  );
};

export default Services;
