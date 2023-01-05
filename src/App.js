import React from 'react';
import './App.css';
import NavbarComponent from './component/NavbarComponent';
import Footer from './component/Footer';
import Home from './component/Home';
import Products from './component/Products';
import { Route, Routes } from 'react-router-dom';
import Product from './component/Product';
import Login from './component/Login';
import Register from './component/Register';
import Cart from "./component/Cart";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <NavbarComponent />
      <ToastContainer />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
      <Footer path="contact" />
    </div>
  );
}

export default App;
