import Footer from "./Footer";

function ApprovedPayments() {
  return (
    <>
    <div className="main-panel">
      <div className="content-wrapper">
        <h3 className="mb-3 text-center">Client Payment Status </h3>
        <div className="row">
          <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Client Name</th>
                          <th>Contract Number</th>
                          <th>Amount</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Jacob</td>
                          <td>Photoshop</td>
                          <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                          <td> <select name="" id="">
                              <option value="pending">Pending</option>
                              <option value="approved">Approved</option>
                          </select> </td>
                        </tr>
                        <tr>
                          <td>Messsy</td>
                          <td>Flash</td>
                          <td className="text-danger"> 21.06% <i className="ti-arrow-down"></i></td>
                          <td> <select name="" id="">
                              <option value="pending">Pending</option>
                              <option value="approved">Approved</option>
                          </select> </td>
                        </tr>
                        <tr>
                          <td>John</td>
                          <td>Premier</td>
                          <td className="text-danger"> 35.00% <i className="ti-arrow-down"></i></td>
                          <td> <select name="" id="">
                              <option value="pending">Pending</option>
                              <option value="approved">Approved</option>
                          </select> </td>
                        </tr>
                        <tr>
                          <td>Peter</td>
                          <td>After effects</td>
                          <td className="text-success"> 82.00% <i className="ti-arrow-up"></i></td>
                          <td> <select name="" id="">
                              <option value="pending">Pending</option>
                              <option value="approved">Approved</option>
                          </select> </td>
                        </tr>
                        <tr>
                          <td>Dave</td>
                          <td>53275535</td>
                          <td className="text-success"> 98.05% <i className="ti-arrow-up"></i></td>
                          <td> 
                            <select name="" id="">
                              <option value="pending">Pending</option>
                              <option value="approved">Approved</option>
                            </select> 
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Footer />    
      </div>
    </div>
    </>
  );
}

export default ApprovedPayments;