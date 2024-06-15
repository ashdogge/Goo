import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light py-0">
      <div className="container-fluid ps-0">
        <Link to="/">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavBar
          dropDowns={[
            {
              airlineName: "American Airlines",
              bidTypesPath: "/american-airlines/bidtypes",
              pilotsPath: "/american-airlines/pilots",
            },
            {
              airlineName: "Alaska Airlines",
              bidTypesPath: "/Alaska-airlines/bidtypes",
              pilotsPath: "/Alaska-airlines/pilots",
            },
            {
              airlineName: "Frontier Airlines",
              bidTypesPath: "/frontier-airlines/bidtypes",
              pilotsPath: "/frontier-airlines/pilots",
            },
            {
              airlineName: "UPS",
              bidTypesPath: "/ups/bidtypes",
              pilotsPath: "/ups/pilots",
            },
            {
              airlineName: "Spirit Airlines",
              bidTypesPath: "/spirit-airlines/bidtypes",
              pilotsPath: "/spirit-airlines/pilots",
            },
          ]}
        />
      </div>
    </nav>
  );
};
