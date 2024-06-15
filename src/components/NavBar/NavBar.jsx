import React from "react";
import { NavBarDropDown } from "../NavBarDropDown/NavBarDropDown";
// Composite component that displays the NavBarDropDown component

export const NavBar = ({ dropDowns }) => {
  return (
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav">
        {dropDowns.map((args, i) => {
          return <NavBarDropDown key={i} {...args} />;
        })}
      </ul>
    </div>
  );
};

//Define prop types for this components
