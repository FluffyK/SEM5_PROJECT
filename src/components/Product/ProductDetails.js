import React from "react";

export default function ProductDetails() {
  return (
    <div className="App">
      <div class="product_image_area section_padding">
        <div class="container">
          <div class="row s_product_inner">
            <div class="col-lg-5">
              <div class="product_slider_img">
                <div id="vertical">
                  <h3>Product.Image</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-5 offset-lg-1">
              <div class="s_product_text">
                <h3>Product.Name</h3>
                <h2>Product.Price</h2>
                <ul class="list">
                  <li>
                    <a>
                      <span>Category</span> Product.Category
                    </a>
                  </li>
                </ul>
                <p>Product.Description</p>
                <div class="card_area">
                  <div class="product_count d-inline-block">
                    <span class="inumber-decrement">
                      {" "}
                      <i class="ti-minus"></i>
                    </span>
                    <input
                      class="input-number"
                      type="text"
                      value="1"
                      min="0"
                      max="10"
                    />
                    <span class="number-increment">
                      {" "}
                      <i class="ti-plus"></i>
                    </span>
                  </div>
                  <div class="add_to_cart">
                    <a href="#" class="btn_3">
                      add to cart
                    </a>
                    <a href="#" class="like_us">
                      {" "}
                      <i class="fa fa-heart-o"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
