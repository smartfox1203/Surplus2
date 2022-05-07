import Footer from "./Footer";

function PartnerCommission () {
  return (
    <>
    <div className="main-panel">
        <div className="content-wrapper">
          <h3 className="mb-3">Commission Payouts</h3>
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="table-sorter-wrapper col-lg-12 table-responsive">
                      <table id="sortable-table-2" className="table table-striped">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th className="sortStyle">Partner Name<i className="ti-angle-down"></i></th>
                            <th className="sortStyle">Client Name<i className="ti-angle-down"></i></th>
                            <th className="sortStyle">Commission Amount<i className="ti-angle-down"></i></th>
                            <th className="sortStyle">Date Paid<i className="ti-angle-down"></i></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Herman Beck</td>
                            <td>John</td>
                            <td>Photoshop</td>
                            <td>$456.00</td>
                            
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Herman Beck</td>
                            <td>Conway</td>
                            <td>Flash</td>
                            <td>$965.00</td>
                            
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>John Richards</td>
                            <td>Alex</td>
                            <td>Premeire</td>
                            <td>$255.00</td>
                            
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>John Richards</td>
                            <td>Jason</td>
                            <td>After effects</td>
                            <td>$975.00</td>
                            
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Messsy max</td>
                            <td>Back</td>
                            <td>Ilustrator</td>
                            <td>$298.00</td>
                            
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PartnerCommission;