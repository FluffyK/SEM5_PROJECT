import React from "react";

export default function Category() {
  return (
    <div className="App">
      <section class="cat_product_area section_padding border_top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="left_sidebar_area">
                <aside class="left_widgets p_filter_widgets sidebar_box_shadow">
                  <div class="l_w_title">
                    <h3>All Categories</h3>
                  </div>
                  <div class="widgets_inner">
                    <ul class="list">
                      <li>
                        <a href="/category/jewelryandaccessory">Jewelry & Accessories</a>
                      </li>

                      <li>
                        <a href="/category/clothing" >Clothing</a>
                      </li>
                      <li>
                        <a href="/category/shoes">Shoes</a>
                      </li>
                      <li>
                        <a href="/category/entertainment">Entertainment</a>
                      </li>
                      <li>
                        <a href="/category/toys">Toys</a>
                      </li>
                      <li>
                        <a href="/category/vintage">Vintage</a>
                      </li>
                      <li>
                        <a href="/category/productsforhome">Produces for Home</a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
