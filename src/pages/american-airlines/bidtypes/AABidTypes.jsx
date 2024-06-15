import React from "react";
import { Link } from "react-router-dom";
import { BidTypeList } from "../../../components/BidTypeList/BidTypeList";
export const AABidTypes = () => {
    return (
        <div className="container">
        <h1>American Airlines - BidTypes</h1>
        <BidTypeList airline="AA" bidTypes={[]} />
        <Link to="/">Home</Link>
      </div>
    )
}