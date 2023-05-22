import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddService from './pages/AddService';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-service" element={<AddService/>} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
