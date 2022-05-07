import { Link } from "react-router-dom";
import Footer from "./Footer";

function ContractAssets() {
  return (
  <>
  <div className="main-panel">
    <div className="content-wrapper">
      <h3 className="mb-3">Assets</h3>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
        <Link to="/editassets">
          <div className="card">
            <div className="card-body">
              <p className="card-title">Assets</p>
              <p className="font-weight-500">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
              <div className="d-flex justify flex-wrap mb-5">
                <div className="me-5 mt-3">
                  <p className="text-muted">APY</p>
                  <h3 className="text-primary fs-30 font-weight-medium">12.3k</h3>
                </div>
                <div className="me-5 mt-3">
                  <p className="text-muted">Term</p>
                  <h3 className="text-primary fs-30 font-weight-medium">14k</h3>
                </div>
                <div className="me-5 mt-3">
                  <p className="text-muted">Minimum</p>
                  <h3 className="text-primary fs-30 font-weight-medium">71.56%</h3>
                </div>
                <div className="mt-3">
                  <p className="text-muted">Maximum</p>
                  <h3 className="text-primary fs-30 font-weight-medium">34040</h3>
                </div> 
              </div>
            </div>
          </div>
        </Link>
        </div>
      </div>

      <div className="">
          <Link to="/addasset" className="btn btn-primary">Add New</Link>
      </div>
    </div>
    <Footer />
  </div>
  </>
)}

export default ContractAssets;