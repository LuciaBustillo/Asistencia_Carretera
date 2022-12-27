import './App.css';
import { Route, Routes } from "react-router"
import { useState, useEffect } from 'react';
import Home from '../pages/home/Home';
import Offer from '../pages/offer/offer';
import Begin from '../pages/customer/begin/Begin';
import SignUp from '../pages/customer/signUp/SignUp'
import LogIn from '../pages/customer/logIn/LogIn'
import LogInTechnical from '../pages/technical/LogInTechnical';
import Incidences from '../pages/customer/incidences/Incidences';
import UsersList from '../pages/customer/logIn/usersList';

function App() {

  const[users, setUsers] = useState([]);

  useEffect(() => {
      fetch('http://127.0.0.1:5000/incidences', 
      {
          'methods': 'GET',
          headers: {'Content-Type':'application/json'
          }
      })
      .then(response => response.json())
      .then(response => setUsers(response))
      .catch(error => console.log(error))
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="userList" element={<UsersList props={users} />} />
        <Route path="offer" element={<Offer />} />
        <Route path='begin' element={<Begin />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="incidences" element={<Incidences />} />
        <Route path="technical" element={<LogInTechnical />} />
      </Routes>
    </div>
  );
}

export default App;