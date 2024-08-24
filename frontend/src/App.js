import "./App.css";
import Cart from "./features/cart/Cart.js";
import CheckoutPage from "./pages/CheckoutPage.js";
import ProductDetailsPage from "./pages/ProductDetailsPage.js";
import Home from "./pages/Home.js";
import LoginPage from "./pages/LoginPage.js";
import SignupPage from "./pages/SignupPage.js";

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/product-detail",
    element: <ProductDetailsPage />,
  },
]);

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
