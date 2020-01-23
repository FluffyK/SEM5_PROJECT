import React from "react"
import "./App.css"
import Footer from "./components/Footer/footer"
import Home from "./components/Home/Home"
import Category from "./components/Category/category"
import Header from "./components/Header/header"
import Nav1 from "./components/NavBars/CatNavBar/Cat_nav"
import Nav2 from "./components/NavBars/MainNavBar/main_nav"
import SignUp from "./components/SingUp/SignUp"
import SingIn from "./components/SignIn/SignIn"
import ShopReg from "./components/ShopReg/Shopreg"
import ProductReg from "./components/ProductReg/ProductReg"
import Recover from "./components/Auth/Recover/Recover"
import Password from "./components/Auth/Recover/Password/Password"
import ProductDetail from "./components/Product/ProductDetails"
import ProductCategory from "./components/Product/CategoryProduct"
import Jewelryandaccessory from './components/Category/JewelryandAccessories/JwlryandAcsry'
import Clothing from "./components/Category/Clothing/Clothing"
import Entertainment from './components/Category/Entertainment/Entertainment'
import ProducesforHome from './components/Category/ProducesforHome/ProducesforHome'
import Shoes from './components/Category/Shoes/Shoes'
import Toys from './components/Category/Toys/Toys'
import Vintage from './components/Category/Vintage/Vintage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/category">
          <Header>
            <Nav1 />
          </Header>
          <Category /><ProductCategory />
        </Route>
        <Route path="/">
          <Header>
            <Nav2 />
          </Header>
          <Home />
        </Route>
        <Route path="/signup">
          <Header>
            <Nav2 />
          </Header>
          <SignUp />
        </Route>
        <Route path="/signin">
          <Header>
            <Nav2 />
          </Header>
          <SingIn />
        </Route>
        <Route path="/shopreg">
          <Header>
            <Nav2 />
          </Header>
          <ShopReg />
        </Route>
        <Route path="/placeproduct">
          <Header>
            <Nav2 />
          </Header>
          <ProductReg />
        </Route>
        <Route path="/recover">
          <Header>
            <Nav2 />
          </Header>
          <Recover />
        </Route>
        <Route path="/password">
          <Header>
            <Nav2 />
          </Header>
          <Password />
        </Route>
        <Route path="/detail">
          <Header>
            <Nav2 />
          </Header>
          <ProductDetail />
        </Route>
        <Route path="/category/jewelryandaccessory">
          <Header>
            <Nav2 />
          </Header>
          <Category /><Jewelryandaccessory /><ProductCategory />
        </Route>
        <Route path="/category/clothing">
          <Header>
            <Nav2 />
          </Header>
          <Category /><Clothing /><ProductCategory />
        </Route>
        <Route path="/category/entertainment">
          <Header>
            <Nav2 />
          </Header>
          <Category /><Entertainment /><ProductCategory />
        </Route>
        <Route path="/category/producesforhome">
          <Header>
            <Nav2 />
          </Header>
          <Category /><ProducesforHome /><ProductCategory />
        </Route>
        <Route path="/category/shoes">
          <Header>
            <Nav2 />
          </Header>
          <Category /><Shoes /><ProductCategory />
        </Route>
        <Route path="/category/toys">
          <Header>
            <Nav2 />
          </Header>
          <Category /><Toys /><ProductCategory />
        </Route>
        <Route path="/category/Vintage">
          <Header>
            <Nav2 />
          </Header>
          <Category /><Vintage /><ProductCategory />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
