import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./user/Singin";
import ProductsTab from "./pages/product-tab/ProductsTab";
import OrdersTab from "./pages/orders-tab/OrdersTab";
import BasketsTab from "./pages/basket-tab/BasketsTab";
import DrawerMenu from "./cores/Menu";
import TestTab from "./pages/TestTab";

const Routes = () => {
  return (
    <BrowserRouter>
      <DrawerMenu />
      <Switch>
        <Route path="/productsTab" exact component={ProductsTab} />
        <Route path="/ordersTab" exact component={OrdersTab} />
        <Route path="/testTab" exact component={TestTab} />
        <Route path="/basketsTab" exact component={BasketsTab} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
