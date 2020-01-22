import React from "react";
import userphoto from "../../assets/43.png";
import search from "../../assets/search.png";
import images from "../../assets/images.jpg";
import heart from "../../assets/heart.jpg";
import Category from "../Category/Category";
import Home from "../Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
      <header class="header">
        <div>
          <div class="top_bar">
            <div class="container">
              <div class="row">
                <div class="col d-flex flex-row">
                  <div class="top_bar_contact_item">
                    <div class="user_icon">
                      <img src={userphoto} alt="" />
                    </div>
                    User
                  </div>
                  <div class="top_bar_content ml-auto">
                    <div class="top_bar_user">
                      <a href="#">
                        English<i class="fas fa-apple-alt"></i>
                      </a>
                    </div>
                    <div class="top_bar_user">
                      <a href="#">
                        MDL<i class="fas fa-chevron-down"></i>
                      </a>
                    </div>
                    <div class="top_bar_user">
                      <div class="user_icon">
                        <img src={userphoto} alt="" />
                      </div>
                      <div>
                        <a href="#">Register</a>
                      </div>
                      <div>
                        <a href="#">Sign in</a>
                      </div>
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
                      <a href="un.html">YSTORE</a>
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
                                  <a class="clc">
                                    All Categories
                                  </a>
                                </li>
                                <li>
                                  <a class="clc">
                                    <Link to="/Category">Jewelry & Accessories</Link>
                                  </a>
                                </li>
                                <li>
                                  <a class="clc">
                                    Vintage
                                  </a>
                                </li>
                                <li>
                                  <a class="clc">
                                    Toys
                                  </a>
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
                            value="Submit"
                          >
                            <img src={search} alt=""/>
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
        </div>
      </header>
  );
}
export default Header;
