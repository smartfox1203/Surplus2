import Footer from "./Footer";

function AddAsset() {
  return (
    <>
     <div class="main-panel">
        <div class="content-wrapper">
          <h3 class="mb-3 text-center">New Crypto Contract Asset </h3>
          <div class="row d-flex justify-content-center">
              <div class="col-md-6">
                <form action="#" id="newAccountForm" class="pt-0">
                    <div class="mb-3">
                        <label for="fName" class="form-label">Name</label>
                        <input type="text" class="form-control" placeholder="Contract Name" id="fName" />
                    </div>
                    
                    <div class="mb-3">
                        <label for="lName" class="form-label">Description</label>
                        <input type="text" class="form-control" placeholder="Write Description" id="lName" />
                    </div>

                    <div class="mb-3">
                        <label for="lName" class="form-label">Guaranteed Rate</label>
                        <input type="text" class="form-control" placeholder="30%" id="lName" />
                    </div>
        
                    <div class="mb-3">
                        <label for="email" class="form-label">Terms (Years)</label>
                        <select name="" class="form-control" id="">
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="7">7</option>
                            <option value="10">10</option>
                        </select>
                    </div>
        
        
                    <div class="mb-3">
                        <label for="newAccount" class="form-label">Minimum Amount</label>
                        <input type="text" class="form-control" placeholder="10" id="newAccount" />
                    </div>
        
                    <div class="mb-3">
                        <label for="newAccountd" class="form-label">Maximum Amount</label>
                        <input type="text" class="form-control" placeholder="1000 USD" id="newAccountd" />
                    </div>
        
                    <div class="mb-3">
                        <label for="newAccountdd" class="form-label">Available Commission Percentage</label>
                        <input type="text" class="form-control" placeholder="20 %" id="newAccountdd" />
                    </div>
        
                    <div class="nextBtnCtrl text-center mt-5">
                        <a href="#" class="btn btn-primary">SAVE</a>
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

export default AddAsset;