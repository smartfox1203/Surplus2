import Footer from "./Footer";
import { Link } from 'react-router-dom';

function MarketingMaterial() {
  return (
    <>
    <div className="main-panel">
      <div className="content-wrapper">
        <h3 className="mb-3">Marketing Materials</h3>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>File Name</th>
                        <th>File Type</th>
                        <th>File Size</th>
                        <th>Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jacob</td>
                        <td>Photoshop</td>
                        <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                        <td><label className="badge badge-danger">Pending</label></td>
                      </tr>
                      <tr>
                        <td>Messsy</td>
                        <td>Flash</td>
                        <td className="text-danger"> 21.06% <i className="ti-arrow-down"></i></td>
                        <td><label className="badge badge-warning">In progress</label></td>
                      </tr>
                      <tr>
                        <td>John</td>
                        <td>Premier</td>
                        <td className="text-danger"> 35.00% <i className="ti-arrow-down"></i></td>
                        <td><label className="badge badge-info">Fixed</label></td>
                      </tr>
                      <tr>
                        <td>Peter</td>
                        <td>After effects</td>
                        <td className="text-success"> 82.00% <i className="ti-arrow-up"></i></td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td>Dave</td>
                        <td>53275535</td>
                        <td className="text-success"> 98.05% <i className="ti-arrow-up"></i></td>
                        <td><label className="badge badge-warning">In progress</label></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          </div>
        <div>
          <Link to="/addmarketingmaterial" className="btn btn-primary">Add New</Link>
        </div>    
      </div>

      <Footer />
    </div>
    </>
  );
}

export default MarketingMaterial;