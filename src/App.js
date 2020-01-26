import React, { Component } from "react"
import "./App.css"
import Footer from "./components/Footer/footer"
import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import Header from "./components/Header/header"
import Nav1 from "./components/NavBars/CatNavBar/Cat_nav"
import Nav2 from "./components/NavBars/MainNavBar/main_nav"
import SignUp from "./components/Auth/SingUp/SignUp"
import SingIn from "./components/Auth/SignIn/SignIn"
import ShopReg from "./components/ShopReg/Store"
import ProductReg from "./components/ProductReg/Product"
import Recover from "./components/Auth/Recover/Recover"
import Password from "./components/Auth/Recover/Password/Password"
import ProductDetail from "./components/Product/ProductDetails"
import ProductCategory from "./components/Product/ProductCategory"
import Jewelry from "./components/Category/JewelryandAccessories/Jewelery"
import Clothing from "./components/Category/Clothing/Clothing"
import Entertainment from "./components/Category/Entertainment/Entertainment"
import ProducesforHome from "./components/Category/ProducesforHome/ProducesforHome"
import Shoes from "./components/Category/Shoes/Shoes"
import Toys from "./components/Category/Toys/Toys"
import Vintage from "./components/Category/Vintage/Vintage"
import Logout from './components/Auth/Logout/Logout'
import Profile from './components/Profile/Profile'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { render } from "@testing-library/react"
class App extends Component {
  constructor(){
    super()
    this.state = {
      signInBool: false
    }
  }
  render() {
    return (
      <Router>
        <Switch>
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
          <Route path="/logout">
            <Header>
              <Nav2 />
            </Header>
            <Logout />
          </Route>
          <Route path="/profile/edit">
            <Header>
              <Nav1 />
            </Header>
            <Profile />
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
          <Route path="/recover/password">
            <Header>
              <Nav1 />
            </Header>
            <Password />
          </Route>
          <Route path="/recover">
            <Header>
              <Nav1 />
            </Header>
            <Recover />
          </Route>
          <Route path="/detail">
            <Header>
              <Nav1 />
            </Header>
            <ProductDetail />
          </Route>
          <Route path="/category/jewelry">
            <Header>
              <Nav1 />
            </Header>
            <Jewelry />
          </Route>
          {/* <Route path="/category/clothing">
            <Header>
              <Nav2 />
            </Header>
            <Category />
            <Clothing />
            <ProductCategory />
          </Route>
          <Route path="/category/entertainment">
            <Header>
              <Nav2 />
            </Header>
            <Category />
            <Entertainment />
            <ProductCategory />
          </Route>
          <Route path="/category/produces">
            <Header>
              <Nav2 />
            </Header>
            <Category />
            <ProducesforHome />
            <ProductCategory />
          </Route>
          <Route path="/category/shoes">
            <Header>
              <Nav2 />
            </Header>
            <Category />
            <Shoes />
            <ProductCategory />
          </Route>
          <Route path="/category/toys">
            <Header>
              <Nav2 />
            </Header>
            <Category />
            <Toys />
            <ProductCategory />
          </Route>
          <Route path="/category/Vintage">
            <Header>
              <Nav2 />
            </Header>
            <Category />
            <Vintage />
            <ProductCategory />
          </Route> */}
          <Route path="/category">
            <Header>
              <Nav1 />
            </Header>
            <Category />
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
}

export default App
