import React from "react";
import { Link } from "react-router-dom";
import ShoppingListInput from "../../../components/ShoppingListInput";
import ShoppingListOutput from "../../../components/ShoppingListOutput";

export const SAPilots = () => {

  /**
   * JSX
   */
  return (
    <div className="container-fluid">
      <ShoppingListInput />
      <ShoppingListOutput />
      <div className="row justify-content-center">
        <div className="col-3 h5">
          <Link to="/spirit-airlines/bidtypes">View History</Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3">
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};
