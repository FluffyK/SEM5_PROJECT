import React, { Component } from 'react'

export default class Logout extends Component {
  componentDidMount(){
    localStorage.removeItem("token")
    window.location.href = "http://localhost:3000/";

  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
