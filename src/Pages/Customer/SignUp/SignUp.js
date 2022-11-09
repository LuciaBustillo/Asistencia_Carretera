import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

    function goesToIncidences() {
        navigate('incidences')
    }

    return (
        <div>
            <h1 className='title'>AsistRoad</h1> 
            <hr className="line"></hr>
            <form className='formSign'>
                <label className='title2'>Sign Up:</label>
                <hr className="line"></hr>
                <br></br>
                <div className="left" id='part1'>
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
                    <label>Confirm Password: </label>
                    <br></br>
                    <input type="password" placeholder="Confirm the password"></input>
                </div>
                
                <hr className="line2"></hr>

                <div className="right" id="part2">
                        <label>Name: </label>
                        <br></br>
                        <input type="text" placeholder="Enter name"></input>
                        <br></br>
                        <br></br>
                        <label>Last Name: </label>
                        <br></br>
                        <input type="text" placeholder="Enter last name"></input>
                        <br></br>
                        <br></br>
                        <label>DNI: </label>
                        <br></br>
                        <input type="text" placeholder="Enter DNI"></input>
                        <br></br>
                        <br></br>
                        <label>Address: </label>
                        <br></br>
                        <input type="text" placeholder="Enter address"></input>
                        <br></br>
                        <br></br>
                        <label>Phone: </label>
                        <br></br>
                        <input type="number" placeholder="Enter phone"></input>
                        <br></br>
                </div>
                <hr className="line"></hr>
                <div className="both">
                    <Link to="/"><button className="buttons-form" id="link">Back</button></Link>
                    <button className="buttons-form" onClick={goesToIncidences}>Log In</button>
                </div>
            </form>
        </div>
    )
}