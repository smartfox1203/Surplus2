import Footer from "./Footer";

function AddMarketingMaterial () {
  return (
    <>
    <div class="main-panel">
        <div class="content-wrapper">
          <h3 class="mb-3">Marketing Materials</h3>
          <div class="row d-flex justify-content-center">
              <div class="col-md-6">
                <form action="#" id="newAccountForm" class="pt-0">
                    <div class="mb-3">
                      <label for="fName" class="form-label">Name</label>
                      <input type="text" class="form-control" placeholder="John" id="fName" />
                    </div>

                    <div class="mb-3">
                      <label for="fName" class="form-label">Link</label>
                      <input type="text" class="form-control" placeholder="https://www.youtube.com/watch?v=fxLFjOa-9UY" id="fName" />
                    </div>

                    <div class="input-group mb-3">
                      <input type="file" class="form-control" id="inputGroupFile02" />    
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

export default AddMarketingMaterial;