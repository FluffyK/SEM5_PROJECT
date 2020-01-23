import React, { Component } from 'react'
import axios from 'axios'

export default class Password extends Component {
  constructor(props){
    super(props)
    this.state = {
      newValue: null,
      oldValue: null
    }
  }
  render() {
    const handleSubmit = (e) => {
  
      if (this.state.newValue === this.state.oldValue) {
        const passData = {
          password: this.state.newValue
        }
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('confirmToken');
        window.history.replaceState({}, document.title, "/recover/password");
        axios.post("https://localhost:4000/user/recover/password?confirmToken=" + myParam, passData)
      } 
      
    }
    return (
      <div className="App">
        <div class="sm-jumbotron:center-align">
          <h2>Change Password</h2>
          <hr />
          <form role="form" onSubmit={handleSubmit}>
            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label">
                New Password:
              </label>
              <div class="col-lg-9">
                <input
                  class="form-control validate"
                  type="text"
                  value={this.state.newValue}
                  onChange={e => this.setState({newValue: e.target.value})}
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
                  value={this.state.oldValue}
                  onChange={e => this.setState({oldValue: e.target.value})}
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
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
