import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import ScrollToTop from './components/ScrollToTop';
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  const user = false
  return (
    <Router>
      <ToastContainer />
      <ScrollToTop />
        <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route exact path="/contact" element={<Contact/>}/>
           <Route exact path="/about" element={<About/>}/>
           <Route exact path="/products" element={<Products/>}/>
           <Route exact path="/product/:id" element={<Product/>}/>
           <Route exact path="/cart" element={<Cart/>}/>           
           <Route exact path="/login" element={user ? <Navigate replace to="/" /> : <Login/>}  />
           <Route exact path="/register" element={user ? <Navigate replace to="/" /> : <Register/>}/>
        </Routes>
    </Router>
  )
};

export default App;
