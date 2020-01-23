import React from "react";

export default function Cat_nav() {
  return (
    <div>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="breadcrumb_iner">
                <div class="breadcrumb_iner_item">
                  <a className="anchor_tag_nav" href="/"><p>Home/</p></a>
                  
                  <a className="anchor_tag_nav" href="/category"><p>Categories</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
