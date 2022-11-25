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
        <div>
            <h1 className='title'>AsistRoad</h1> 

            <hr className="line"></hr>

            <form className='formLogin'>
                <label className='title2'>Log In:</label>
                <br></br>
                <br></br>

                <label>User: </label>
                <br></br>
                <input type="text"></input>
                <br></br>
                <br></br>
                <label>Password: </label>
                <br></br>
                <input type="password"></input>
                <br></br>
                <br></br>
                
                <div>
                    <Link to="/"><button className="buttons-form" id="links">Back</button></Link>
                    <button type="submit" className="buttons-form" onClick={goesToIncidencias}>Submit</button>
                </div>
            </form>
        </div>
    )
}