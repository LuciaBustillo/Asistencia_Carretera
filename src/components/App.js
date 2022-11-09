import './App.css';
import { Route, Routes } from "react-router"

import Begin from '../Pages/Begin/Begin'
import SignUp from '../Pages/Customer/SignUp/SignUp'
import LogIn from '../Pages/Customer/LogIn/LogIn'
import LogInTechnical from '../Pages/Technical/LogInTechnical';
import Incidences from '../Pages/Customer/Incidences/Incidences'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Begin />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="incidences" element={<Incidences />} />
        <Route path="technical" element={<LogInTechnical />} />
      </Routes>
    </div>
  );
}

export default App;