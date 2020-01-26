import ProductCategory from "../../Product/ProductCategory"
import Category from "../Category"
import React, { Component } from "react"
import axios from "axios"

export default class Jewelery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: []
    }
  }
  componentDidMount() {
    axios.get("https://localhost:4000/products").then(res => {
      let copy = []
      copy = res.data
      copy.map(el => {
        //schimbi categoria jos sa fie fix asa cum se numeste peste tot
        if (el.productCategories === "Jewelry & Accessories") {
          console.log("data:image/jpeg;charset=utf-8;base64," + el.productImages[0].data)
          this.setState(prevState => ({
            arr: [...prevState.arr, el]
          }))
        }
      })
    })
  }
  render() {
    return (
      <div>
        <ul style={{display: "flex", flexWrap: "wrap"}}>
          {this.state.arr.map(function(el) {
            return (
              <li style={{width: "50%"}} >
                <ProductCategory
                  title={el.productTitle}
                  price={el.productPrice}
                  img={"data:image/jpeg;charset=utf-8;base64," + el.productImages[0].data}
                />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
