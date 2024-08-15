import BtnRightArrow from "../assets/btnRightArrow.svg";
import Mail from "../assets/mail.svg";
import Phone from "../assets/phone.svg";
import Location from "../assets/location.svg";
import InputBox from "./InputBox";
import Button from "./Button";
import Heading from "./Heading";

const Section6 = () => {
  return (
    <div id="contactUs" className="section6-container">
      <div className="section6-content">
        <div className="section6-heading">
          <Heading headingStyle={{ width: "360px" }} center={true}>
            Contact Us
          </Heading>
        </div>
        <div className="section6-box">
          {/* Left Section */}
          <div className="section6-left">
            <div className="section6-item section6-item1">
              <div className="section6-icon">
                <img src={Mail} alt="Mail logo" />
              </div>
              <div className="section6-text">
                <div className="section6-label">Our Email Id</div>
                <div className="section6-value">studionrent@gmail.com</div>
              </div>
            </div>
            <div className="section6-item section6-item2">
              <div className="section6-icon">
                <img src={Phone} alt="Phone logo" />
              </div>
              <div className="section6-text">
                <div className="section6-label">Our Phone Number</div>
                <div className="section6-value">9056472346</div>
              </div>
            </div>
            <div className="section6-item section6-item3">
              <div className="section6-icon">
                <img src={Location} alt="Location logo" />
              </div>
              <div className="section6-text">
                <div className="section6-label">Our Address</div>
                <div className="section6-value">
                  123 Creative Street, Country, ZIP Code
                </div>
              </div>
            </div>
          </div>
          {/* Divider for larger screens */}
          <div className="section6-divider"></div>
          {/* Right Section */}
          <div className="section6-right">
            <div className="section6-connect">
              <div className="section6-connect-text">Let’s Connect</div>
              <h1 className="section6-connect-heading">
                Send your Queries to us
              </h1>
            </div>
            <div className="section6-inputs">
              <InputBox
                inputStyle={{
                  height: "69px",
                  paddingBottom: "25px",
                }}
                placeholder={"What is Your Name?"}
              />
              <InputBox
                inputStyle={{
                  height: "69px",
                  paddingBottom: "25px",
                }}
                placeholder={"Enter Your Email"}
              />
              <InputBox
                inputStyle={{
                  height: "193px",
                  paddingBottom: "149px",
                }}
                placeholder={"Leave a message for us"}
              />
            </div>
            <Button
              buttonStyle={{
                width: "100%",
                height: "69px",
                padding: "23px 24px 25px 32px",
                borderRadius: "19px",
                borderColor: "rgba(211,211,211,1)",
                background: "rgba(8,28,7,1)",
              }}
            >
              <div className="section6-button-text">Send</div>
              <div>
                <img src={BtnRightArrow} alt="" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
