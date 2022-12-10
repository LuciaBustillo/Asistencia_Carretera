import { useNavigate } from "react-router-dom";
import './Begin.css';

export default function Begin() {

    const navigate = useNavigate();

    return (
      <div className="begin">
        <h1 className='title'>AsistRoad</h1> 
        <p className="description">¿Tienes algún problema en carretera con tu coche? Contacta con nosotros:</p>

        <hr className="line"></hr>

        <div className="buttons">
          <button className="buttons-text" onClick={() => navigate('/logIn')}>Inicio de Sesión</button>
          <br></br>
          <br></br>
          <button className="buttons-text" onClick={() => navigate('/signUp')}>Registro</button>
        </div> 

        <hr className="line"></hr>
        
        <div className="techn">
          <label>¿Eres técnico? </label>
          <button className="buttons-tech" onClick={() => navigate('technical')}>Inicio de Sesión Técnico</button>
        </div>
      </div>
    )
}