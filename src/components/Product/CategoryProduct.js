import React from "react";
import two from "../../assets/2.jpg";

export default function CategoryProduct() {
  return (
    <div className="App">
      <div class="col-lg-4 col-sm-6">
        <div class="single_category_product">
          <div class="single_category_img">
            <img src={two} alt="" />
            <div class="category_social_icon">
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-heart-o"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="category_product_text">
              <a href="/details">
                <h5>Jewelry</h5>
              </a>
              <p>$5.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
