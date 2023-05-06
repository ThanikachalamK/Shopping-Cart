import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/auth";
import CommonProvider from "./contexts/common";
import ProductsProvider from "./contexts/products";
import CartProvider from "./contexts/cart";
import CheckoutProvider from "./contexts/checkout";
// import RouteWrapper from "./layouts/RouteWrapper";
import AuthLayout from "./layouts/AuthLayout";
// import CommonLayout from "./layouts/CommonLayout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthPage from "./pages/auth";
import HomePage from "./pages/home";
import CheckoutPage from "./pages/checkout";
import "./assets/scss/style.scss";

const App = () => {
  return (
    <AuthProvider>
      <CommonProvider>
        <ProductsProvider>
          <CartProvider>
            <CheckoutProvider>
              <BrowserRouter>
                <Routes>
                  <Route 
                    path="/"
                    exact
                    element={<><Header /><HomePage /><Footer /></>}
                    // layout={}
                  />
                  <Route 
                    path="/checkout"
                    element={<><Header /><CheckoutPage /><Footer /></>}
                    // layout={<CommonLayout />}
                  />
                  <Route 
                    path="/auth"
                    element={<><AuthPage /><Footer /></>}
                    // layout={<AuthLayout />}
                  />
                </Routes>
              </BrowserRouter>
            </CheckoutProvider>
          </CartProvider>
        </ProductsProvider>
      </CommonProvider>
    </AuthProvider>
  );
};

export default App;
