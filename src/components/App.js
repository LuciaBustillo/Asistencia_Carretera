import './App.css';
import { Route, Routes } from "react-router"

import Home from '../pages/home/Home';
import Begin from '../pages/begin/Begin'
import SignUp from '../pages/customer/signUp/SignUp'
import LogIn from '../pages/customer/logIn/LogIn'
import LogInTechnical from '../pages/technical/LogInTechnical';
import Incidences from '../pages/customer/incidences/Incidences'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="incidences" element={<Incidences />} />
        <Route path="technical" element={<LogInTechnical />} />
      </Routes>
    </div>
  );
}

export default App;