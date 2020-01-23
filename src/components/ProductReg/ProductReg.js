import React from "react";

export default function ProductReg() {
  return (
    <div className="App">
      <div class="sm-jumbotron:center-align">
        <h2>Create your Product</h2>
        <form role="form">
          <div class="form-group row">
            <label class="col-lg-3 col-form-label form-control-label">
              Title
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
              Description
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
              Category
            </label>
            <div class="col-lg-9">
              <select name="Please choose a category: ">
                <option value="Jewelry & Accessories">Jewelry & Accessories</option>
                <option value="Shoes">Shoes</option>
                <option value="Clothing">Clothing</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Vintage">Vintage</option>
                <option value="Toys">Toys</option>
                <option value="Produces for Home">Produces for Home</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label class="custom-file-label" for="inputGroupFile01">
              Choose file
            </label>
            <input
              type="file"
              class="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            />
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
