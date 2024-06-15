import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bidTypes: [
    {
      id: 1,
      airline: "AA",
      seat: "CAPTAIN",
      fleet: "73G",
      domicile: "SEA",
      status: "CURRENT",
      numOfBidPeriods: 3,
      lastImported: new Date().toDateString(),
    },
    {
      id: 2,
      airline: "AS",
      seat: "CAPTAIN",
      fleet: "73G",
      domicile: "geg",
      status: "CURRENT",
      numOfBidPeriods: 2,
      lastImported: new Date().toDateString(),
    },
    {
      id: 3,
      airline: "AS",
      seat: "First Officer",
      fleet: "73G",
      domicile: "geg",
      status: "CURRENT",
      numOfBidPeriods: 2,
      lastImported: new Date().toDateString(),
    },
  ],
};

export const bidTypeSlice = createSlice({
  name: "bidTypes",
  initialState,
});

export const selectBidTypes = (state) => state.bidTypes.bidTypes;

export default bidTypeSlice.reducer;