import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Switch, Route } from "react-router-dom";

import ProductDetailScreen from "../Screens/ProductDetailScreen";
import Checkout from "../Screens/CheckoutScreen";
import HomeScreen from "../Screens/HomeScreen";
import CategoryScreen from "../Screens/CategoryScreen";
import MyOrders from "../Screens/MyOrders";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import SumUpScreen from "../Screens/SumUpScreen";

const ContentLayout = () => {
  return (
    <div>
      <Switch>
        <Route path="/product/:id">
          <ProductDetailScreen />
        </Route>
        <Route path="/categories/:id">
          <CategoryScreen />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/register">
          <RegisterScreen />
        </Route>
        <Route path="/orders">
          <MyOrders />
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/process">
          <SumUpScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </div>
  );
};
export default ContentLayout;
