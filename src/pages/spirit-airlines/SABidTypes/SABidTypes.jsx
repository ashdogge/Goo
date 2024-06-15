import React from "react";
import { Link } from "react-router-dom";
import { ShoppingListHistory } from "../../../components/ShoppingListHistory/ShoppingListHistory";

export const SABidTypes = () => {

  /**
   * Hooks
   */

  /**
   * Javascript
   */

  /**
   * JSX
   */
  return (
    <div className="container">
      <ShoppingListHistory />
      <div className="row justify-content-center text-center">
        <div className="col h5 ">
          <Link to="/spirit-airlines/pilots">Return to Shopping List</Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col">
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};
