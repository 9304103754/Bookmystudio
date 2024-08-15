import HomeLogo from "../assets/homeLogo.svg";
import DropdownArrow from "../assets/dropdownArrow.svg";
import {
  usefullLinkData,
  policiesData,
  helpData,
} from "../data/landing/footer";
import { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [height, setHeight] = useState(275);
  const [usefullLinkDropdown, setUsefullLinkDropdown] = useState(false);
  const [policiesDropdown, setPoliciesDropdown] = useState(false);
  const [helpDropdown, setHelpDropdown] = useState(false);

  return (
    <>
      <div className="footer-container desktop-view">
        <div className="footer-content">
          <div className="logo-container">
            <img src={HomeLogo} alt="Home Logo" className="logo-image" />
            <div className="logo-text">
              <div className="logo-title">Book My</div>
              <div className="logo-subtitle">Studio</div>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <div className="section-title">Useful Links</div>
              {usefullLinkData.map((data, index) => (
                <div key={index} className={`link-item ${data.width}`}>
                  {data.text}
                </div>
              ))}
            </div>
            <div className="footer-section">
              <div className="section-title">Policies</div>
              {policiesData.map((data, index) => (
                <div key={index} className={`link-item ${data.width}`}>
                  {data.text}
                </div>
              ))}
            </div>
            <div className="footer-section">
              <div className="section-title">Help</div>
              {helpData.map((data, index) => (
                <div key={index} className={`link-item ${data.width}`}>
                  {data.text}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-text">
            © 2023 Bookmystudio. All rights reserved.
          </div>
        </div>
      </div>

      <div className="footer-container mobile-view" style={{ height: height }}>
        <div className="logo-container">
          <img src={HomeLogo} alt="Home Logo" className="logo-image" />
          <div className="logo-text">
            <div className="logo-title">Book My</div>
            <div className="logo-subtitle">Studio</div>
          </div>
        </div>
        <div className="dropdown-section">
          <div
            className="dropdown-header"
            onClick={() => {
              setUsefullLinkDropdown((prevState) => {
                !prevState
                  ? setHeight(height + 135)
                  : setHeight(height - 135);
                return !prevState;
              });
            }}
          >
            <div className="dropdown-title">Useful Links</div>
            <img src={DropdownArrow} alt="Dropdown Arrow" />
          </div>
          {usefullLinkDropdown && (
            <div className="dropdown-content">
              {usefullLinkData.map((data, index) => (
                <div key={index} className="dropdown-item">
                  {data.text}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="dropdown-section">
          <div
            className="dropdown-header"
            onClick={() => {
              setPoliciesDropdown((prevState) => {
                !prevState
                  ? setHeight(height + 110)
                  : setHeight(height - 110);
                return !prevState;
              });
            }}
          >
            <div className="dropdown-title">Policies</div>
            <img src={DropdownArrow} alt="Dropdown Arrow" />
          </div>
          {policiesDropdown && (
            <div className="dropdown-content">
              {policiesData.map((data, index) => (
                <div key={index} className="dropdown-item">
                  {data.text}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="dropdown-section">
          <div
            className="dropdown-header"
            onClick={() => {
              setHelpDropdown((prevState) => {
                !prevState ? setHeight(height + 60) : setHeight(height - 60);
                return !prevState;
              });
            }}
          >
            <div className="dropdown-title">Help</div>
            <img src={DropdownArrow} alt="Dropdown Arrow" />
          </div>
          {helpDropdown && (
            <div className="dropdown-content">
              {helpData.map((data, index) => (
                <div key={index} className="dropdown-item">
                  {data.text}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="footer-bottom">
          <div className="footer-text">
            © 2023 Bookmystudio. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
