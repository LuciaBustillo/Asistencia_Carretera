import './LogIn.css';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useContext } from 'react';
import AsistenciaContext from '../../../context/AsistenciaContext';

export default function LogIn() {
    const {setUser} = useContext(AsistenciaContext);

    const [userWrite, setUserWrite] = useState('');
    const [passWrite, setPassWrite] = useState('');

    const navigate = useNavigate();

    function goesToHomeCustomer(userWrite) {
        setUser(userWrite);
        navigate('/logIn/homeCustomer')
    }

    const onHandleLogin = (e)=>{
        //Para que no recargue la pagina con submit
        e.preventDefault()

        const user = {
            user: userWrite,
            password : passWrite
        }

        fetch('http://127.0.0.1:5000/login', 
        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(response => 
            {
                response.isValidUser == 'true' ?
                    goesToHomeCustomer(userWrite)
                :
                    alert('Introduce un usuario o contraseña válidos.')
            })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <Header />

            <div className='logIn'>
                <p className='logIn-title'>Inicio de sesión:</p>
                <div className='logIn-content'>
                    <form className='formLogin' onSubmit={(e)=>onHandleLogin(e)}>
                        <label>Usuario: </label>
                        <br></br>
                        <input type="text" onChange={(e) => setUserWrite(e.target.value)}></input>
                        <br></br>
                        <br></br>
                        <label>Contraseña: </label>
                        <br></br>
                        <input type="password" onChange={(e) => setPassWrite(e.target.value)}></input>

                        <hr className="line3"></hr>

                        <button type="submit" className="logIn-button">Enviar</button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}