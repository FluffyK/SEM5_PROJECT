import React, {useState} from "react"
import axios from "axios"

export default function SignIn() {
  const [emailValue, setEmailValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault()
    const loginData = () =>({
      "email": emailValue,
      "password": passwordValue
    })
    axios.post('https://localhost:4000/auth/login', loginData)
      .then(res => console.log(res.data));
  }
  return (
    // <div className="App">
    <div class="sm-jumbotron:center-align">
      <h2>Place You Product</h2>
      <form role="form" onSubmit={handleSubmit}>
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
            <input
              class="form-control validate"
              type="text"
              name="password"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-lg-3 col-form-label form-control-label">
            Insert Product images
          </label>

          <input
            type="file"
            class="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
          />
          <label class="custom-file-label" for="inputGroupFile01">
            Choose file
          </label>
        </div>
        <div class="form-group row">
          <label class="col-lg-3 col-form-label form-control-label">
            Set Price
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
            <input type="submit" class="btn btn-primary" value="Save Changes" />
          </div>
        </div>
      </form>
    </div>
    // </div>
  )
}
