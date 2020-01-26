import React, { Component } from "react"
import userphoto from "../../assets/43.png"
import search from "../../assets/search.png"
import images from "../../assets/images.jpg"
import heart from "../../assets/heart.jpg"
import axios from 'axios'

class Header extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    const signDiv = document.querySelector("#sign-menu")
    const usernameDiv = document.querySelector("#username-div")
    const createDiv = document.querySelector("#create-div")
    const createDiv2 = document.querySelector("#create-div2")
    if (localStorage.getItem("token") !== null) {

      const config = {
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token"))
        }
      }
      axios.get("https://localhost:4000/user", config)
        .then(el => {
          const aEdit = document.createElement("a")
          aEdit.href = "/profile/edit"
          aEdit.innerHTML = el.data.username
          usernameDiv.appendChild(aEdit)
        })

      const div1 = document.createElement("div")
      div1.className = "user_icon"
      const img1 = document.createElement("img")
      img1.src = userphoto
      div1.appendChild(img1)

      const div2 = document.createElement("div")
      const a1 = document.createElement("a")
      a1.href = "/logout"
      a1.innerHTML = "Logout"
      div2.appendChild(a1)
      
      
      const div5 = document.createElement("div")
      const a5 = document.createElement("a")
      a5.href = "/stores/new"
      a5.innerHTML = "Create Store"
      div5.appendChild(a5)
      
      const div6 = document.createElement("div")
      const a6 = document.createElement("a")
      a6.href = "/products/new"
      a6.innerHTML = "Create Product"
      div6.appendChild(a6)

      createDiv.appendChild(div5)
      createDiv2.appendChild(div6)
      signDiv.appendChild(div1)
      signDiv.appendChild(div2)

    } else {
      const div1 = document.createElement("div")
      div1.className = "user_icon"
      const img1 = document.createElement("img")
      img1.src = userphoto
      div1.appendChild(img1)

      const div2 = document.createElement("div")
      const div3 = document.createElement("div")
      const a1 = document.createElement("a")
      const a2 = document.createElement("a")
      a1.href = "/signUp"
      a1.innerHTML = "Register"
      a2.href = "/signIn"
      a2.innerHTML = "Sign in"
      div2.appendChild(a1)
      div3.appendChild(a2)

      signDiv.appendChild(div1)
      signDiv.appendChild(div2)
      signDiv.appendChild(div3)
    }
  }
  render() {
    return (
      <header class="header">
        <div>
          <div class="top_bar">
            <div class="container">
              <div class="row">
                <div class="col d-flex flex-row">
                  <div class="top_bar_contact_item" id="username-div">
                    <div class="user_icon">
                      <img src={userphoto} alt="" />
                    </div>
                  </div>
                  <div class="top_bar_contact_item" id="create-div">
                    
                  </div>
                  <div class="top_bar_contact_item ml-4" id="create-div2">
                    
                  </div>
                  <div class="top_bar_content ml-auto">
                    <div class="top_bar_user">
                      <a href="#">
                        English<i class="fas fa-apple-alt"></i>
                      </a>
                    </div>
                    <div class="top_bar_user">
                      <a href="#">
                        MDL <i class="fas chevron-down"></i>
                      </a>
                    </div>
                    <div class="top_bar_user" id="sign-menu">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="header_main">
            <div class="container">
              <div class="row">
                <div class="col-lg-2 col-sm-3 col-3 order-1">
                  <div class="logo_container">
                    <div class="logo">
                      <a href="/">YSTORE</a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                  <div class="header_search">
                    <div class="header_search_content">
                      <div class="header_search_form_container">
                        <form action="#" class="header_search_form clearfix">
                          <input
                            type="search"
                            required="required"
                            class="header_search_input"
                            placeholder="Search for products..."
                          />
                          <div class="custom_dropdown">
                            <div class="custom_dropdown_list">
                              <span class="custom_dropdown_placeholder clc">
                                All Categories
                              </span>
                              <i class="fas fa-chevron-down"></i>
                              <ul class="custom_list clc">
                                <li>
                                  <a class="clc">All Categories</a>
                                </li>
                                <li>
                                  <a class="clc">Jewelry & Accessories</a>
                                </li>
                                <li>
                                  <a class="clc">Vintage</a>
                                </li>
                                <li>
                                  <a class="clc">Toys</a>
                                </li>
                                <li>
                                  <a class="clc" href="#">
                                    Entertainment
                                  </a>
                                </li>
                                <li>
                                  <a class="clc" href="#">
                                    Shoes
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <button
                            type="submit"
                            class="header_search_button trans_300"
                            value="Submit">
                            <img src={search} alt="" />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                  <div class="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                    <div class="wishlist d-flex flex-row align-items-center justify-content-end">
                      <div class="wishlist_icon">
                        <img src={heart} alt="" />
                      </div>
                      <div class="wishlist_content">
                        <div class="wishlist_text">
                          <a href="wishlist.html">Wishlist</a>
                        </div>
                        <div class="wishlist_count">5</div>
                      </div>
                    </div>

                    <div class="cart">
                      <div class="cart_container d-flex flex-row align-items-center justify-content-end">
                        <div class="cart_icon">
                          <img src={images} alt="" />
                          <div class="cart_count">
                            <span>10</span>
                          </div>
                        </div>
                        <div class="cart_content">
                          <div class="cart_text">
                            <a href="#">Cart</a>
                          </div>
                          <div class="cart_price">$90</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.props.children}
        </div>
      </header>
    )
  }
}
export default Header
