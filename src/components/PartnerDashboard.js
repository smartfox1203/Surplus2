import Footer from "./Footer";

function PartnerDashboard() {
  return (
    <>
      <div className="main-panel">
        <div className="content-wrapper">
          <h3 className="mb-3">Partner Dashboard</h3>
          <div className="row">
            <div className="col-md-12 grid-margin transparent">
              <div className="row">
                <div className="col-md-4 mb-4 stretch-card transparent">
                  <div className="card card-tale">
                    <div className="card-body">
                      <p className="mb-4">Total Number Of Partners</p>
                      <p className="fs-30 mb-2">4006</p>
                      <p>10.00% (30 days)</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4 stretch-card transparent">
                  <div className="card card-dark-blue">
                    <div className="card-body">
                      <p className="mb-4">Total New Partners Today</p>
                      <p className="fs-30 mb-2">61344</p>
                      <p>22.00% (30 days)</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4 stretch-card transparent">
                  <div className="card card-dark-blue">
                    <div className="card-body">
                      <p className="mb-4">Total Amount Of New Partners This Week</p>
                      <p className="fs-30 mb-2">61344</p>
                      <p>22.00% (30 days)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 grid-margin transparent">
              <div className="row">
                <div className="col-md-4 mb-4 stretch-card transparent">
                  <div className="card card-tale">
                    <div className="card-body">
                      <p className="mb-4">Total Number Of New Partners This Month</p>
                      <p className="fs-30 mb-2">4006</p>
                      <p>10.00% (30 days)</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4 stretch-card transparent">
                  <div className="card card-dark-blue">
                    <div className="card-body">
                      <p className="mb-4">Average Amount Of Clients Per Partner</p>
                      <p className="fs-30 mb-2">61344</p>
                      <p>22.00% (30 days)</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4 stretch-card transparent">
                  <div className="card card-dark-blue">
                    <div className="card-body">
                      <p className="mb-4">Top Partner By Number Of Client</p>
                      <p className="fs-30 mb-2">61344</p>
                      <p>22.00% (30 days)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 grid-margin transparent">
              <div className="row">
                <div className="col-md-4 mb-4 stretch-card transparent">
                  <div className="card card-tale">
                    <div className="card-body">
                      <p className="mb-4">Top Partner By Total Amount Of Client Assets</p>
                      <p className="fs-30 mb-2">4006</p>
                      <p>10.00% (30 days)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2022.  Surplus All rights reserved.</span>
           
          </div>
        </footer>
      </div>
    </>
  );
}

export default PartnerDashboard;
