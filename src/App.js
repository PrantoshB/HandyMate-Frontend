import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import ReservationForm from './pages/ReservationForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddService from './pages/AddService';
import Navbar from './components/Navbar';

const App = () => (
  <div className="container-fluid-fluid col-md-12 d-flex">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/reserve" element={<ReservationForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-service" element={<AddService />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
