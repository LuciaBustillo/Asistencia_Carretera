import './Begin.css';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import logIn from '../../../img/iconos/begin/cerrar-con-llave.png';
import signUp from '../../../img/iconos/begin/agregue-el-simbolo-de-la-interfaz-de-personas-de-la-persona-negra-de-cerca-con-el-signo-mas-en-un-circulo-pequeno.png';
import asist from '../../../img/iconos/begin/auriculares.png';
import { useNavigate } from "react-router-dom";

export default function Begin() {

    const navigate = useNavigate();

    return (
      <div>
        <Header />

        <div className='begin-content'>
          <div>
            <button className="buttons-text" id='logIn' onClick={() => navigate('/logIn')}>
              <img src={logIn} className='iconLogIn' />
              <p>Inicio de Sesión</p>
            </button>
            <br></br>
            <br></br>
            <button className="buttons-text" id='signUp' onClick={() => navigate('/signUp')}>
              <img src={signUp} className='iconSignUp' />
              <p>Registro</p>
            </button>
          </div> 

          <hr className="line"></hr>
          
          <div className="asist">
            <label className='asist-text'>¿Eres asistente técnico? </label>
            <button className="buttons-asist" onClick={() => navigate('technical')}>
              Inicio de Sesión Asistente
              <img src={asist} className='iconAsist' />
            </button>
          </div>
        </div>
        
        <Footer />
      </div>
    )
}