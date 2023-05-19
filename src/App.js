import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister'
import Reservations from './pages/Reservations'
import AddService from './pages/AddService'
import ReservationForm from './pages/ReservationForm'
import Details from './pages/Details'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/:id' element={<Details />} >
              <Route path='/reserve' element={<ReservationForm />} />
            </Route>
          </Route>
          <Route path='/login' element={<LoginRegister />} />
          <Route path='/reservations' element={<Reservations />} />
          <Route path='/add-service' element={<AddService />} />
          <Route path='/reserve_service' element={<ReservationForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )

};

export default App;
