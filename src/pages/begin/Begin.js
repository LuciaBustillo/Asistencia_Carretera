import { useNavigate } from "react-router-dom";

export default function Begin() {

    const navigate = useNavigate();

    return (
      <div>
        <h1 className='title'>AsistRoad</h1> 

        <p className="description">Do you have a problem with your vehicle? Contact us:</p>
        <hr className="line"></hr>

        <div className="buttons">
          <button className="buttons-text" onClick={() => navigate('logIn')}>Log In</button>
          <br></br>
          <br></br>
          <button className="buttons-text" onClick={() => navigate('signUp')}>Sign Up</button>
        </div> 
        <hr className="line"></hr>
        <div className="techn">
          <label>Are you technical? </label>
          <button className="buttons-tech" onClick={() => navigate('technical')}>Log In Technical</button>
        </div>
      </div>
    )
}