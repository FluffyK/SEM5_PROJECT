import React, { useState } from "react"
import './Profile.css'
import Axios from "axios"

export default function Profile() {
  const [usernameValue, setUsernameValue] = useState(null)
  const [oldValue, setOldValue] = useState(null)
  const [newValue, setNewValue] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()  
    let editData = null
    if(usernameValue === ""){
      editData = {
        oldPassword: oldValue,
        newPassword: newValue
      }
    } else if(oldValue === ""){
      editData = {
        username: usernameValue,
      }
    } else {
      editData = {
        username: usernameValue,
        oldPassword: oldValue,
        newPassword: newValue
      }
    }
    console.log(editData)
    const config = {
      headers: {
        "auth-token": JSON.parse(localStorage.getItem("token"))
      }
    }
    Axios.put('https://localhost:4000/profile/edit', editData, config)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="profileEdit">
      <form onSubmit={handleSubmit}>
        <hr />
        <h4 style={{color: "red"}}>If you want to change only password you need to type both Old and New password!</h4>
        <hr />
        <div class="form-group">
          <label for="exampleFormControlInput1">Username:</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            value={usernameValue}
            onChange={e => setUsernameValue(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Old Password:</label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            value={oldValue}
            onChange={e => setOldValue(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">New Password:</label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            value={newValue}
            onChange={e => setNewValue(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
