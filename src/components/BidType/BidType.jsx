import React from "react";

export const BidType = ({
  bidType: { id, fleet, seat, domicile, status, numOfBidPeriods, lastImported },
}) => (
  <div>
    <div className="flex-row">
        <div className="flex-column">{id}</div>
        <div className="flex-column">{seat}{fleet} {domicile}</div>
        <div className="flex-column">{status}</div>
        <div className="flex-column">{numOfBidPeriods}</div>
        <div className="flex-column">{lastImported}</div>
        <div className="flex-column">
            <button className="btn btn-primary btn-small btn-block">
                Import
            </button>
        </div>
    </div>
  </div>
);
