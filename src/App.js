import React from "react"
import "./App.css"
import Footer from "./components/Footer/footer"
import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import Header from "./components/Header/header"
import Nav1 from "./components/NavBars/CatNavBar/Cat_nav"
import Nav2 from "./components/NavBars/MainNavBar/main_nav"
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
          <Category />
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
