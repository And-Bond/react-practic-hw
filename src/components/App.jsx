import React from 'react';
import Products from './pages/Products/Products';
import Basket from './pages/Basket/Basket';
import NavBar from './modules/NavBar/NavBar';
import {Routes, Route} from 'react-router-dom'
export const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Products />}/>
      <Route path='/basket' element={<Basket />}/>
    </Routes>
    </>
  );
};
