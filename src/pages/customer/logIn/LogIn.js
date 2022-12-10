import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './LogIn.css';

export default function LogIn() {
    const navigate = useNavigate();

    function goesToIncidencias() {
        //Enviar datos al login y verificar
        //fectch (/logIn)
        navigate('/incidences')
        doLogin();
    }

    function doLogin() {
        //Llamada de verdad
    }

    return (
        <div className="content">
            <h1 className='title'>AsistRoad</h1> 

            <hr className="line"></hr>

            <form className='formLogin'>
                <label className='title2'>Log In:</label>
                <hr className="line"></hr>
                <br></br>

                <label>Usuario: </label>
                <br></br>
                <input type="text"></input>
                <br></br>
                <br></br>
                <label>Contraseña: </label>
                <br></br>
                <input type="password"></input>
                <br></br>
                <br></br>
                <hr className="line"></hr>
                <div>
                    <Link to="/"><button className="buttons-form" id="links">Volver</button></Link>
                    <button type="submit" className="buttons-form" onClick={goesToIncidencias}>Enviar</button>
                </div>
            </form>
        </div>
    )
}