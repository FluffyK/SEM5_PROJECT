import React from "react"
import Home from "../../Home/Home"
import Category from "../../Category/category"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function main_nav() {
  return (
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
                      <a href="/category/jewelryandaccessory">Jewelry & Accessories</a>
                    </li>
                    <li>
                      <a href="/category/shoes">Shoes</a>
                    </li>
                    <li>
                      <a href="/category/clothing">Clothing</a>
                    </li>
                    <li>
                      <a href="/category/entertainment">Entertainment</a>
                    </li>
                    <li>
                      <a href="/category/vintage">Vintage</a>
                    </li>
                    <li>
                      <a href="/category/toys">Toys</a>
                    </li>
                    <li>
                      <a href="/category/producesforhome">Produces for Home</a>
                    </li>
                  </ul>
                </div>

                <div class="main_nav_menu ml-auto">
                  <ul class="standard_dropdown main_nav_dropdown">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li class="hassubs">
                      <a href="/">
                        All Categories
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Contact Us
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
  )
}
