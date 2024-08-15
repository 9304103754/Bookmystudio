import React from 'react';
import './Section2.css';
import SearchIcon from "../assets/searchIcon.svg";
import UsersIcon from "../assets/usersIcon.svg";
import EditIcon from "../assets/editIcon.svg";
import BookOpenIcon from "../assets/bookOpenIcon.svg";
import RightDirectionArrow from "../assets/rightDirectionArrow.svg";
import BottomDirectionArrow from "../assets/bottomDirectionArrow.svg";
import LeftDirectionArrow from "../assets/leftDirectionArrow.svg";
import RightDownDirectionArrow from "../assets/rightDownDirectionArrow.svg";
import LeftDownDirectionArrow from "../assets/leftDownDirectionArrow.svg";
import Card from "./Card"
import Heading from "./Heading"

const Section2 = () => {
  return (
    <div className="section2-container">
      <div id="howItWorks" className="how-it-works">
        <Heading headingStyle={{ width: "340px" }}>How It Works</Heading>
        <div className="relative">
          <div className="relative flex-row">
            <div>
              <Card
                icon={SearchIcon}
                title={"Search"}
                description={
                  "Browse through a diverse range of studios tailored to your needs."
                }
              />
            </div>
            <div className="sm:flex items-center hidden">
              <img src={RightDirectionArrow} alt="" />
            </div>
            <div className="arrow-right-down sm:hidden block">
              <img src={RightDownDirectionArrow} alt="" />
            </div>
            <div className="sm:ml-[0px] ml-[128px]">
              <Card
                icon={UsersIcon}
                title={"Connect"}
                description={
                  "Chat with studio owners or agents to ask questions and request tours."
                }
              />
            </div>
          </div>
          <div className="arrow-bottom">
            <img src={BottomDirectionArrow} alt="" />
          </div>
          <div className="arrow-left-down sm:hidden block">
            <img src={LeftDownDirectionArrow} alt="" />
          </div>
          <div className="relative flex-row sm:pt-[0px] pt-[20px]">
            <div>
              <Card
                icon={EditIcon}
                title={"Create"}
                description={
                  "Unleash your creativity in your new studio space."
                }
              />
            </div>
            <div className="sm:flex items-center hidden">
              <img src={LeftDirectionArrow} alt="" />
            </div>
            <div className="arrow-right-down sm:hidden block">
              <img src={RightDownDirectionArrow} alt="" />
            </div>
            <div className="sm:ml-[0px] ml-[128px]">
              <Card
                icon={BookOpenIcon}
                title={"Book"}
                description={
                  "Securely book your chosen studio for your preferred date and time."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
