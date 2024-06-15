import Header from "./components/Header";
import HomePage from "./pages/home/index";
import AABidTypes from "./pages/american-airlines/bidtypes";
import AAPilots from "./pages/american-airlines/pilots";
import ASBidTypes from "./pages/alaska-airlines/bidtypes";
import ASPilots from "./pages/alaska-airlines/pilots";
import FABidTypes from "./pages/frontier-airlines/bidtypes";
import UPBidTypes from "./pages/ups/bidtypes";
import FAPilots from "./pages/frontier-airlines/pilots";
import Forms from "./pages/examples/forms";
import SAPilots from "./pages/spirit-airlines/pilots";
import SABidTypes from "./pages/spirit-airlines/SABidTypes";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/american-airlines/bidtypes" element={<AABidTypes />} />
        <Route path="/american-airlines/pilots" element={<AAPilots />} />
        <Route path="/alaska-airlines/bidtypes" element={<ASBidTypes />} />
        <Route path="/alaska-airlines/pilots" element={<ASPilots />} />
        <Route path="/frontier-airlines/bidtypes" element={<FABidTypes />} />
        <Route path="/frontier-airlines/pilots" element={<FAPilots />} />
        <Route path="/ups/bidtypes" element={<UPBidTypes />} />
        <Route path="/example/forms" element={<Forms />} />
        <Route path="/spirit-airlines/pilots" element={<SAPilots />} />
        <Route path="/spirit-airlines/bidtypes" element={<SABidTypes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
