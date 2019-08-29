import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Filter from './component/filter/filter';
import Header from './component/header/header';
import SideBar from './component/sidebar/sidebar';
import Home from './component/home/home';
import SignUp from './component/dummy/dummy';
import Login from './component/login/login';
import AllPost from './component/posts-wp/allPost';
import AllProduct from './component/products/allProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <div id="wrapper">
            <SideBar />
            <Switch>
            <Route exact path="/" component={Home} />
              <Route exact path="/apartments" component={Filter} />
              <Route path="/signup" component={ SignUp} />
              <Route path="/login" component={ Login} />
              <Route path="/posts" component={ AllPost} />
              <Route path="/allProduct" component={AllProduct} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
