import React from 'react';
import './Card.css';

const Card = ({ icon, title, description }) => {
  return (
    <div className="card-container">
      <div className="card-icon-title">
        <div className="card-icon">
          <img src={icon} alt="Icon" />
        </div>
        <div className="card-title">{title}</div>
      </div>

      <div className="card-description">
        {description}
      </div>
    </div>
  );
};

export default Card;
