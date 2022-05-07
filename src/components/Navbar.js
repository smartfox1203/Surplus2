import { Link } from "react-router-dom";

const Navbar = ({ splitLocation }) => {
  return (
    <>
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className={splitLocation === "" ? "active nav-item" : "nav-item"}>
          <Link className="nav-link" to="">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Client Dashboard</span>
          </Link>
        </li>
        
        
        <li className= {splitLocation === "partnerdashboard" ? "active nav-item" : "nav-item"}>
          <Link className="nav-link" to="/partnerdashboard">
            <i className="icon-grid "></i>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>

        <li className= {splitLocation === "contractassets" ? "active nav-item" : "nav-item"}>
          <Link className="nav-link" to="/contractassets">
            <i className="ti-money"></i>
            <span className="menu-title">Crypto <br /> Contract Assets</span>
          </Link>
        </li>

        <li className= {splitLocation === "partnercommission" ? "active nav-item" : "nav-item"}>
          <Link className="nav-link" to="/partnercommission">
            <i className="icon-paper ti-user"></i>
            <span className="menu-title">Partner <br /> Commission    Payouts</span>
          </Link>
        </li>

        <li className= {splitLocation === "newpartner" ? "active nav-item" : "nav-item"}>
          <Link className="nav-link" to="/newpartner">
            <i className="ti-plus"></i>
            <span className="menu-title">Add <br /> New Partner</span>
          </Link>
        </li>

        <li className= {splitLocation === "approvedpayments" ? "active nav-item" : "nav-item"}>
          <Link className="nav-link" to="/approvedpayments">
            <i className="ti-pencil-alt"></i>
            <span className="menu-title">Approve <br /> Recieved  Payments</span>
          </Link>
        </li>

        <li className= {splitLocation === "marketingmaterial" ? "active nav-item" : "nav-item"}>
          <Link className="nav-link" to="/marketingmaterial">
            <i className="ti-announcement"></i>
            <span className="menu-title">Partners <br /> Marketing Materials</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="signin">
            <i className="icon-paper ti-plug"></i>
            <span className="menu-title">Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
