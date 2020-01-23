import ProductCategory from "../../Product/ProductCategory"
import Category from "../Category"
import React, { Component } from "react"
import axios from "axios"

export default class Jewelery extends Component {
  constructor(props){
    super(props);
    this.state = {
      arr: []
    }
  }
  componentDidMount() {
    axios.get("https://localhost:4000/products")
      .then((res) => {
        let copy = []
        copy = res.data
        copy.map(el => {
          if (el.productCategories === "Jewelry & Accessories"){
            this.setState(prevState => ({
              arr: [...prevState.arr, el]
            }))
          } 
        })
      })

  }
  render() {
    return (
      <div className="App">
        {
          this.state.arr.map(function(el){
            return <ProductCategory title={el.productTitle} price={el.productPrice} img={el.productImages} />
          })
        }
        <Category />
      </div>
    )
  }
}
