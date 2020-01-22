import React from "react";
import Home from "../../Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function main_nav() {
  return (
    <Router>
      <div>
        <nav class="main_nav">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="main_nav_content d-flex flex-row">
                  <div class="cat_menu_container">
                    <div class="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                      <div class="cat_burger">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div class="cat_menu_text">Categories</div>
                    </div>
                    <ul class="cat_menu">
                      <li>
                        <a>
                          <Link to="/category"> Jewelry & Accessories </Link>
                        </a>
                      </li>
                      <li>
                        <a>
                          <Link to="/category"> Shoes </Link>
                        </a>
                      </li>
                      <li>
                        <a><Link to="/category"> Clothing </Link>
                        </a>
                      </li>
                      <li>
                        <a><Link to="/category">Entertainment</Link>
                        </a>
                      </li>
                      <li>
                        <a><Link to="/category">Vintage </Link> </a>
                      </li>
                      <li>
                        <a><Link to="/category">Toys</Link></a>
                      </li>
                      <li> 
                        <a><Link to="/category">Produces for Home</Link></a>
                      </li>
                    </ul>
                  </div>

                  <div class="main_nav_menu ml-auto">
                    <ul class="standard_dropdown main_nav_dropdown">
                      <li>
                        <a>
                          <Link to="/">Home</Link>
                        </a>
                      </li>
                      <li class="hassubs">
                        <a href="category.html">
                          All Categories<i class="fas fa-chevron-down"></i>
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">
                          Contact Us<i class="fas fa-chevron-down"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="menu_trigger_container ml-auto">
                    <div class="menu_trigger d-flex flex-row align-items-center justify-content-end">
                      <div class="menu_burger">
                        <div class="menu_trigger_text">menu</div>
                        <div class="cat_burger menu_burger_inner">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        {/* <Route path="/category">
            <Category />
            </Route> */}
      </Switch>
    </Router>
  );
}
