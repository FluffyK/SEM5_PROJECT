import React, { useState } from "react"
import "./Product.css"
import axios from "axios"

export default function Product() {
  const [categoryValue, setCategoryValue] = useState(null)
  const [priceValue, setPriceValue] = useState(null)
  const [nameValue, setNameValue] = useState(null)
  const [titleValue, setTitleValue] = useState(null)
  const [fileValue, setFileValue] = useState(null)
  const [descriptionValue, setDescriptionValue] = useState(null)
  
  const multipleRead = (files) => {
    const arr = []
    var reader = new FileReader();  
    const readFile = async(index) => {
      if( index >= files.length ) return;
      var file = files[index];
      reader.onload = async(e) => {  
        // get file content  
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve(arr.push({ data: btoa(e.target.result), contentType: "image/png" })), 1000)
        });
      
        await promise; 
        // do sth with bin
        readFile(index+1)
      }
      reader.readAsBinaryString(file);
    }
    readFile(0)
    setTimeout(function(){ return arr }, 3000); 

  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    let config = {
      headers: {
        "auth-token": JSON.parse(localStorage.getItem("token"))
      }
    }

    let newArr = multipleRead(fileValue)

    console.log(newArr)

    const productData = {
      storeName: nameValue,
      productTitle: titleValue,
      productCategories: categoryValue,
      productPrice: priceValue,
      productImages: newArr
    }
    console.log(productData)
    axios
      .post("https://localhost:4000/products", productData, config)
      .then(res => {
        console.log(res.data)
      })
    // }
  }
  return (
    <div className="App">
      <h2>Create Product</h2>
      <hr />
      <form className="form-store" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Store Name:</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Store Name"
            value={nameValue}
            onChange={e => setNameValue(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Product Title:</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Store Name"
            value={titleValue}
            onChange={e => setTitleValue(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Category</label>
          <select
            value={categoryValue}
            onChange={e => setCategoryValue(e.target.value)}
            class="form-control"
            id="exampleFormControlSelect1">
            <option value="null">Categories</option>
            <option value="Jewelry & Accessories">Jewelry & Accessories</option>
            <option value="Shoes">Shoes</option>
            <option value="Clothing">Clothing</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Vintage">Vintage</option>
            <option value="Toys">Toys</option>
            <option value="Produces for Home">Produces for Home</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={descriptionValue}
            onChange={e => setDescriptionValue(e.target.value)}></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Price:</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="MDL"
            value={priceValue}
            onChange={e => setPriceValue(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Choose Images:</label>
          <input
            onChange={e => setFileValue(e.target.files)}
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
            multiple
            data-show-upload="true"
            data-show-caption="true"
          />
        </div>
        <button className="btn btn-primary mb-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
