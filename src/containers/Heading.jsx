import React from 'react';
import './Heading.css';

const Heading = ({
  children,
  headingStyle,
  center = false,
  lineWidth = "103px",
}) => {
  return (
    <div
      className={`heading-container ${center ? "heading-center" : ""}`}
      style={headingStyle}
    >
      <div className="heading-text">
        {children}
      </div>
      <div
        className="heading-line"
        style={{ width: lineWidth }}
      ></div>
    </div>
  );
};

export default Heading;
