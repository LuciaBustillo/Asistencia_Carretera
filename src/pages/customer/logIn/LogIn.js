import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LogIn() {
    const navigate = useNavigate();

    function goesToIncidencias() {
        //Enviar datos al login y verificar
        //fectch (/logIn)
        navigate('incidences')
        doLogin();
    }

    function doLogin() {
        //Llamada de verdad
    }

    return (
        <div className="bod">
            <h1 className='title'>AsistRoad</h1> 
            <hr className="line"></hr>
            <form className='formLogin'>
                <label className='title2'>Log In:</label>
                <br></br>
                <br></br>
                <label>User: </label>
                <br></br>
                <input type="text" placeholder="Enter the user"></input>
                <br></br>
                <br></br>
                <label>Password: </label>
                <br></br>
                <input type="password" placeholder="Enter the password"></input>
                <br></br>
                <br></br>
                <div>
                    <Link to="/"><button className="link">Back</button></Link>
                    <button onClick={goesToIncidencias}>Log In</button>
                </div>
            </form>
        </div>
    )
}