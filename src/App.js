import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ClientDashboard from "./components/ClientDashboard";
import PartnerDashboard from "./components/PartnerDashboard";
import ContractAssets from "./components/ContractAssets";
import EditAssets from "./components/EditAssets";
import PartnerCommission from "./components/PartnerCommission";
import NewPartner from "./components/NewPartner";
import ApprovedPayments from "./components/ApprovedPayments";
import MarketingMaterial from "./components/MarketingMaterial";
import AddMarketingMaterial from "./components/AddMarketingMaterial";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import AddAsset from "./components/AddAsset";

function App() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  if (splitLocation[1] === "signin") {
    return (
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    );
  }
  if (splitLocation[1] === "signup") {
    return (
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    );
  } 
  else {
    return (
      <div className="App">
        <Header />
        <div className="sidebar-mini">
          <div className="container-scroller">
            <div className="container-fluid page-body-wrapper">
              <Navbar splitLocation={splitLocation[1]} />

              <Routes>
                <Route exact path="/" element={<ClientDashboard />} />
                <Route exact path="/partnerdashboard" element={<PartnerDashboard />} />
                <Route path="/contractassets" element={<ContractAssets />} />
                <Route path="/editassets" element={<EditAssets />} />
                <Route path="/addasset" element={<AddAsset />} />
                <Route path="/partnercommission" element={<PartnerCommission />} />
                <Route path="/newpartner" element={<NewPartner />} />
                <Route path="/approvedpayments" element={<ApprovedPayments />} />
                <Route path="/marketingmaterial" element={<MarketingMaterial />} />
                <Route path="/addmarketingmaterial" element={<AddMarketingMaterial />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
