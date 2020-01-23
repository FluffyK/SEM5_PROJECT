import React, {useState} from "react"
import './SignIn.css'
import axios from "axios"

export default function SignIn() {
  const [emailValue, setEmailValue] = useState(null);
	const [passwordValue, setPasswordValue] = useState(null);
	
  const handleSubmit = () => {
    const loginData = {
      email: emailValue,
      password: passwordValue
    }
    axios.post('https://localhost:4000/user/login', loginData)
      .then(res =>{
        const token = JSON.stringify(res.data)
        const date = new Date()
        date.setHours(date.getHours() + 4)
        console.log(token)
				localStorage.setItem("token", token)
				window.location.href = "http://localhost:3000/";
      });
  }
  return (
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
				<form class="login100-form validate-form" onSubmit={handleSubmit}>
					<span class="login100-form-title p-b-33">
						Account Login
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email" value={emailValue} onChange={e => setEmailValue(e.target.value)} />
						<span class="focus-input100-1"></span>
						<span class="focus-input100-2"></span>
					</div>

					<div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
						<input class="input100" type="password" name="pass" placeholder="Password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} />
						<span class="focus-input100-1"></span>
						<span class="focus-input100-2"></span>
					</div>

					<div class="container-login100-form-btn m-t-20">
						<button class="login100-form-btn">
							Sign in
						</button>
					</div>

					<div class="text-center p-t-45 p-b-4">
						<span class="txt1">
							Forgot Password?
						</span>

						<a href="/recover" class="txt2 hov1">
							Recover
						</a>
					</div>

					<div class="text-center">
						<span class="txt1">
							Create an account?
						</span>

						<a href="/signUp" class="txt2 hov1">
							Sign up
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
  )
}
