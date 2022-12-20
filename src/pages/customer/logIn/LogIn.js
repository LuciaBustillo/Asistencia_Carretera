import './LogIn.css';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function LogIn(props) {

    const[user, setUser] = useState('')

    const navigate = useNavigate();

    function goesToIncidencias() {
        navigate('/incidences')
    }

    return (
        <div>
            <Header />

            <div className='logIn'>
                <p className='logIn-title'>Inicio de sesión:</p>
                <div className='logIn-content'>
                    <form className='formLogin'>
                {
                    props.users && props.users.map(user => {
                        return (
                            <div key={user.codigo}>
                                <p>HOLA</p>
                            </div>
                        )
                    })
                }
                        <label>Usuario: </label>
                        <br></br>
                        <input type="text"></input>
                        <br></br>
                        <br></br>
                        <label>Contraseña: </label>
                        <br></br>
                        <input type="password"></input>

                        <hr className="line3"></hr>

                        <button type="submit" className="logIn-button" onClick={goesToIncidencias}>Enviar</button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

//navigate('/incidences')