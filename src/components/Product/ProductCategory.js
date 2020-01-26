import React from "react"
export default function CategoryProduct(props) {
  return (
    <div>
      <div class="col-lg-4 col-sm-6">
        <div class="single_category_product">
          <div class="single_category_img">
            <img src={props.img} alt="" />
            <div class="category_social_icon">
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-heart"></i>
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
                <h5>{props.title}</h5>
              </a>
              <p>{props.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
