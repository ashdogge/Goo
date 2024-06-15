import React from "react";
import { Administration } from "../../components/Administration/Administration";
import { Jumbotron } from "../../components/Jumbotron/Jumbotron";
import { Version } from "../../components/Version/Version";
import { Airline } from "../../components/Airline/Airline";

export const HomePage = () => {
  return (
    <div className="container">
      <div>
        <Jumbotron
          administration={<Administration name="Tom Jones" />}
          version={<Version current="1.1.0" />}
        />
      </div>
      <div className="row">
        <Airline
          name={"American Airlines"}
          path={"./pages/american-airlines/bidtypes"}
        />
        <Airline
          name={"Alaska Airlines"}
          path={"./pages/alaska-airlines/bidtypes"}
        />
        <Airline
          name={"Frontier Airlines"}
          path={"./pages/frontier-airlines/bidtypes"}
        />
        <Airline
          name={"UPS"}
          path={"./pages/ups/bidtypes"}
        />
      </div>
    </div>
  );
};
