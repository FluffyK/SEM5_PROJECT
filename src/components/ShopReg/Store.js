import React, { useState } from "react"
import "./Store.css"
import axios from "axios"

export default function Shopreg() {
  const [emailValue, setEmailValue] = useState(null)
  const [addressValue, setAddressValue] = useState(null)
  const [nameValue, setNameValue] = useState(null)
  const [fileValue, setFileValue] = useState(null)
  const handleSubmit = e => {
    e.preventDefault()

    const reader = new FileReader()

    // Convert data to base64
    reader.readAsBinaryString(fileValue)
    reader.onload = function(e) {
      const b64Img = btoa(e.target.result)

      let config = {
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token"))
        }
      }

      const storeData = {
        storeName: nameValue,
        storeEmail: emailValue,
        storeAddress: addressValue,
        storeImage: { data: b64Img, contentType: "imgType" }
      }
      axios
        .post("https://localhost:4000/stores", storeData, config)
        .then(res => {
          console.log(res.data)
        })
    }
  }
  return (
    <div className="App">
      <h2>Create Store</h2>
      <hr />
      <form className="form-store" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name:</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Store Name"
            value={nameValue}
            onChange={e => setNameValue(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Address:</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="street"
            value={addressValue}
            onChange={e => setAddressValue(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Choose Image:</label>
          <input
            onChange={e => setFileValue(e.target.files[0])}
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
        <button className="btn btn-primary mb-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
