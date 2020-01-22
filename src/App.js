import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import banner from "./assets/88.png";
import zero from "./assets/0.jpg";
import fiftyfive from "./assets/55.jpg";
import ninetyeight from "./assets/98.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="super_container">
        <div class="banner">
          <div
            class="banner_background"
            style={{ backgroundImage: "url(88.png)" }}
          ></div>
          <div class="container fill_height">
            <div class="row fill_height">
              <div class="banner_product_image">
                <img src={banner} alt="" />
              </div>
              <div class="col-lg-5 offset-lg-4 fill_height">
                <div class="banner_content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="feature_part pt-4">
        <div class="container-fluid p-lg-0 overflow-hidden">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-4 col-sm-6">
              <div class="single_feature_post_text">
                <img src={zero} alt="#" />
                <div class="hover_text">
                  <a href={"./category.js"} class="btn_2">
                    New arrivals
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="single_feature_post_text">
                <img src={fiftyfive} alt="#" />
                <div class="hover_text">
                  <a href={"./category.js"} class="btn_2">
                    New arrivals
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="single_feature_post_text">
                <img src={ninetyeight} alt="#" />
                <div class="hover_text">
                  <a href={"./category.js"} class="btn_2">
                    {" "}
                    New arrivals
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="feature_part pt-4"></section>
      <Footer />
    </div>
  );
}

export default App;
