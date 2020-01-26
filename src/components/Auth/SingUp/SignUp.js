import React, { useState } from "react"
import axios from "axios"

export default function SignUp() {
  const [emailValue, setEmailValue] = useState(null)
  const [usernameValue, setUsernameValue] = useState(null)
  const [questionValue, setQuestionValue] = useState(null)
  const [passwordValue, setPasswordValue] = useState(null)

  const handleSubmit = () => {
    const registerData = {
      email: emailValue,
      username: usernameValue,
      question: questionValue,
      password: passwordValue
    }
    axios.post('https://localhost:4000/user/register', registerData)
      .then(res =>{
        console.log(res.data)
        window.location.href = "http://localhost:3000/";
        
      });
  }
  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
          <form class="login100-form validate-form" onSubmit={handleSubmit}>
            <span class="login100-form-title p-b-33">Sign Up</span>

            <div
              class="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz">
              <input
                class="input100"
                type="email"
                name="email"
                placeholder="Email"
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
              />
              <span class="focus-input100-1"></span>
              <span class="focus-input100-2"></span>
            </div>

            <div
              class="wrap-input100 validate-input">
              <input
                class="input100"
                type="text"
                placeholder="Username"
                value={usernameValue}
                onChange={e => setUsernameValue(e.target.value)}
              />
              <span class="focus-input100-1"></span>
              <span class="focus-input100-2"></span>
            </div>

            <div
              class="wrap-input100 rs1 validate-input"
              data-validate="Password is required">
              <input
                class="input100"
                type="password"
                name="pass"
                placeholder="Password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
              />
              <span class="focus-input100-1"></span>
              <span class="focus-input100-2"></span>
            </div>

            <div class="wrap-input100 rs1 validate-input">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Select Question</option>
                <option>What was the name of your elementary / primary school?</option>
                <option>What is the name of your favorite childhood friend?</option>
                <option>In what city or town did your mother and father meet?</option>
                <option>What is your grandmother's first name?</option>
                <option>What is the last name of your favorite high school teacher?</option>
                <option>Where were you when you had your first kiss?</option>
              </select>
            </div>

            <div
              class="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz">
              <input
                class="input100"
                type="text"
                name="email"
                placeholder="Answer question"
                value={questionValue}
                onChange={e => setQuestionValue(e.target.value)}
              />
              <span class="focus-input100-1"></span>
              <span class="focus-input100-2"></span>
            </div>

            <div class="container-login100-form-btn m-t-20">
              <button class="login100-form-btn">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
