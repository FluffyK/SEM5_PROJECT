import React from 'react'

export default function Password() {
    return (
        <div className="App">
        <div class="sm-jumbotron:center-align">
          <h2>Password Recovery</h2>
          <form role="form">
            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label">
                New Password:
              </label>
              <div class="col-lg-9">
                <input
                  class="form-control validate"
                  type="text"
                  name="username"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label">
                Confirm New Password: 
              </label>
              <div class="col-lg-9">
                <input
                  class="form-control validate"
                  type="text"
                  name="email"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label"></label>
              <div class="col-lg-9">
                <input
                  type="submit"
                  class="btn btn-primary"
                  value="Save Changes"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
}
