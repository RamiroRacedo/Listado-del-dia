import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registro from './Paginas/Registro';
import Login from './Paginas/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registro />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
