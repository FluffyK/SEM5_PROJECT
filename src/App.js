import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import banner from "./assets/88.png"

function App() {
  return (
    <div className="App">
      <Header />
      <div class="super_container">

<div class="banner">
<div class="banner_background" style={{backgroundImage:"url(88.png)"}}></div>
<div class="container fill_height">
<div class="row fill_height">
<div class="banner_product_image"><img src={banner} alt=""/></div>
<div class="col-lg-5 offset-lg-4 fill_height">
<div class="banner_content">


</div>
</div>
</div>
</div>
</div>
</div>
      <Footer />
    </div>
  );
}

export default App;
