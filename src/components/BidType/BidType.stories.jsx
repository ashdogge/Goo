import React from "react";
import { BidType } from "./BidType";

export default {
  title: "Components/BidType",
  component: BidType,
};

const Template = (args) => <BidType {...args} />;
export const Default = Template.bind({});
Default.args = {
  bidType: {
    id: 1,
    seat: "CAPTAIN",
    fleet: "73G",
    domicile: "SEA",
    status: "CURRENT",
    numOfBidPeriods: 3,
    lastImported: new Date().toDateString(),
  },
};
