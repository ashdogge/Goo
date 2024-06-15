import React from "react";
import { BidType } from "../BidType/BidType";
import { selectBidTypes } from "../../redux/bidTypeSlice";
import { useSelector } from "react-redux";


export const BidTypeList = ({airline, bidTypes }) => {
  const allBidTypes = useSelector(selectBidTypes) 
  if(allBidTypes && allBidTypes.length > 0) {
    bidTypes = allBidTypes.filter(bidType => bidType.airline === airline)
  }

  return (
    <div className="table-responsive">
      <section className="flex-table">
        <div className="flex-row header">
          <div className="flex-column">ID</div>
          <div className="flex-column">Bid Types</div>
          <div className="flex-column">Status</div>
          <div className="flex-column"># Bid Periods</div>
          <div className="flex-column">Last Import</div>
          <div className="flex-column">&nbsp;</div>
        </div>
      
      {bidTypes.map(bidType => {
        return <BidType key={bidType.id} bidType={bidType} />;
      })}
      </section>
    </div>
  );
};
