import React from "react"
import "./App.css"
import Footer from "./components/Footer/footer"
import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import Header from "./components/Header/header"
import Nav1 from "./components/NavBars/CatNavBar/Cat_nav"
import Nav2 from "./components/NavBars/MainNavBar/main_nav"
import SignUp from "./components/SingUp/SignUp"
import SingIn from "./components/SignIn/SignIn"
import ShopReg from "./components/ShopReg/Store"
import ProductReg from "./components/ProductReg/Product"
import Recover from "./components/Auth/Recover/Recover"
import Password from "./components/Auth/Recover/Password/Password"
import ProductDetail from "./components/Product/ProductDetails"
import ProductCategory from "./components/Product/CategoryProduct"
import Jewelryandaccessory from "./components/Category/JewelryandAccessories/JwlryandAcsry"
import Clothing from "./components/Category/Clothing/Clothing"
import Entertainment from "./components/Category/Entertainment/Entertainment"
import ProducesforHome from "./components/Category/ProducesforHome/ProducesforHome"
import Shoes from "./components/Category/Shoes/Shoes"
import Toys from "./components/Category/Toys/Toys"
import Vintage from "./components/Category/Vintage/Vintage"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/category">
          <Header>
            <Nav1 />
          </Header>
          <Category />
          <ProductCategory />
        </Route>
        <Route path="/signUp">
          <Header>
            <Nav1 />
          </Header>
          <SignUp />
        </Route>
        <Route path="/signIn">
          <Header>
            <Nav1 />
          </Header>
          <SingIn />
        </Route>
        <Route path="/stores/new">
          <Header>
            <Nav1 />
          </Header>
          <ShopReg />
        </Route>
        <Route path="/products/new">
          <Header>
            <Nav1 />
          </Header>
          <ProductReg />
        </Route>
        <Route path="/recover">
          <Header>
            <Nav1 />
          </Header>
          <Recover />
        </Route>
        <Route path="/recover/password">
          <Header>
            <Nav1 />
          </Header>
          <Password />
        </Route>
        <Route path="/detail">
          <Header>
            <Nav2 />
          </Header>
          <ProductDetail />
        </Route>
        <Route path="/jewelryandaccessory">
          <Header>
            <Nav2 />
          </Header>
          <Category />
          <Jewelryandaccessory />
          <ProductCategory />
        </Route>
        <Route path="/clothing">
          <Header>
            <Nav2 />
          </Header>
          <Category />
          <Clothing />
          <ProductCategory />
        </Route>
        <Route path="/entertainment">
          <Header>
            <Nav2 />
          </Header>
          <Category />
          <Entertainment />
          <ProductCategory />
        </Route>
        <Route path="/producesforhome">
          <Header>
            <Nav2 />
          </Header>
          <Category />
          <ProducesforHome />
          <ProductCategory />
        </Route>
        <Route path="/shoes">
          <Header>
            <Nav2 />
          </Header>
          <Category />
          <Shoes />
          <ProductCategory />
        </Route>
        <Route path="/toys">
          <Header>
            <Nav2 />
          </Header>
          <Category />
          <Toys />
          <ProductCategory />
        </Route>
        <Route path="/Vintage">
          <Header>
            <Nav2 />
          </Header>
          <Category />
          <Vintage />
          <ProductCategory />
        </Route>
        <Route path="/">
          <Header>
            <Nav2 />
          </Header>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
