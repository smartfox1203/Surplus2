import Footer from "./Footer";

function NewPartner() {
  return (
    <>
    <div className="main-panel">
        <div className="content-wrapper">
          <h3 className="mb-3 text-center">Add New Partner </h3>
          <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <form action="#" id="newAccountForm" className="pt-0">
                    <div className="mb-3">
                        <label for="fName" className="form-label">First Name</label>
                        <input type="text" className="form-control" placeholder="John" id="fName" />
                    </div>

                    <div className="mb-3">
                        <label for="lName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" placeholder="Smith" id="lName" />
                    </div>

                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Email" id="email" />
                    </div>

                    <div className="mb-3">
                        <label for="Phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" placeholder="1234556" id="Phone" />
                    </div>

                    <div className="mb-3">
                        <label for="newAccount" className="form-label">Partner Commission Percentage</label>
                        <input type="text" className="form-control" placeholder="10%" id="newAccount" />
                    </div>

                    <div className="mb-3">
                        <label for="newAccountd" className="form-label">Partner Number</label>
                        <input type="text" className="form-control" placeholder="00000000" id="newAccountd" />
                    </div>

                    <div className="mb-3">
                        <label for="newAccountdd" className="form-label">Upline Partner Number</label>
                        <input type="text" className="form-control" placeholder="00000" id="newAccountdd" />
                    </div>
                    <div className="mb-3">
                        <label for="newAccountdds" className="form-label">Bitcoin Wallet Address</label>
                        <input type="text" className="form-control" placeholder="1234567996796754545" id="newAccountdds" />
                    </div>

                    <div className="mb-3">
                        <label for="newAccountdds" className="form-label">Create a Password</label>
                        <input type="password" className="form-control" placeholder="*********" id="newAccountdds" />
                    </div>

                    <div className="nextBtnCtrl text-center mt-5">
                        <a href="#" className="btn btn-primary">SAVE</a>
                    </div>
                </form>
              </div>
          </div>       
        </div>
        <Footer />
      </div>
    </>
  );
}

export default NewPartner;