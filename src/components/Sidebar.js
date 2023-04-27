import React from "react";
import MyInfo from "./MyInfo";
import Button from "./Button";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <MyInfo />
      <div className="buttons-container">
        <Button
          buttonText={
            <span className="material-symbols-rounded home-button">home</span>
          }
          buttonLink="/"
        />
        <Button buttonText="CONTACT >" buttonLink="/contact" />
        <Button buttonText="MY WORK >" buttonLink="/my_work" />
        <Button buttonText="SKILL SET >" buttonLink="/skill_set" />
      </div>
      <div className="social-icons-container">
        <a href="https://www.linkedin.com/in/carlos-alvarado-a844a3259/" target="_blank">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/CarloEdi" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
