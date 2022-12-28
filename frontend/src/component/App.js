import './App.css';
import { Route, Routes } from "react-router"
import Home from '../pages/home/Home';
import Offer from '../pages/offer/offer';
import Begin from '../pages/customer/begin/Begin';
import SignUp from '../pages/customer/signUp/SignUp'
import LogIn from '../pages/customer/logIn/LogIn'
import HomeCustomer from '../pages/customer/homeCustomer/HomeCustomer';
import Incidences from '../pages/customer/incidences/Incidences';
import InfoCustomer from '../pages/customer/infoCustomer/InfoCustomer';
import { useState } from 'react';
import AsistenciaContext from "../context/AsistenciaContext";

function App() {
  
  const [user, setUser] = useState("");
  const [idUser, setIdUser] = useState(0);

  return (
    <AsistenciaContext.Provider
      value={{
        user,
        setUser,
        idUser,
        setIdUser
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="offer" element={<Offer />} />
        <Route path='begin' element={<Begin />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="logIn/" element={<LogIn />} />
        <Route path="/logIn/homeCustomer" element={<HomeCustomer />} />
        <Route path="/logIn/incidences" element={<Incidences />} />
        <Route path="/logIn/infoCustomer" element={<InfoCustomer />} />
      </Routes>
    </AsistenciaContext.Provider>
  );
}

export default App;