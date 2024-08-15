import React from "react";
import "./Section4.css"; // Importing the CSS file for styling
import Heading from "./Heading";

const Section4 = () => {
  const cardData = [
    {
      logo: "https://via.placeholder.com/50", // Placeholder logo
      title: "High Quality",
      description: "We offer high-quality services with the best standards."
    },
    {
      logo: "https://via.placeholder.com/50", // Placeholder logo
      title: "Affordable Prices",
      description: "Our prices are competitive and offer great value."
    },
    {
      logo: "https://via.placeholder.com/50", // Placeholder logo
      title: "24/7 Support",
      description: "Our support team is available around the clock."
    }
  ];

  return (
    <div id="features" className="section4-container">
      <div className="heading-container">
        <Heading headingStyle={{ width: "425px" }} center={true} lineWidth="215px">
          Why Choose BookmyStudio?
        </Heading>
      </div>
      <div className="card-container">
        {cardData.map((data, index) => {
          return (
            <Card
              key={index}
              logo={data.logo}
              title={data.title}
              description={data.description}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ logo, title, description }) => {
  return (
    <div className="card">
      <div className="card-logo">
        <img src={logo} alt={title} />
      </div>
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Section4;
