import React from "react";

export default function SignUp() {
  return (
    <div className="App">
      <div class="sm-jumbotron:center-align">
        <h2>User Registration</h2>
        <form role="form">
          <div class="form-group row">
            <label class="col-lg-3 col-form-label form-control-label">
              User name
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
              Email
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
            <label class="col-lg-3 col-form-label form-control-label">
              Password
            </label>
            <div class="col-lg-9">
              <input
                class="form-control validate"
                type="text"
                name="password"
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
  );
}
