import './SignUp.css';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function SignUp() {

    const navigate = useNavigate();


    function goesToLogin() {
        navigate('/logIn')
    }

    return (
        <div>
            <Header />

            <div className="signUp">
                <p className='signUp-title'>Registro:</p>

                <div className='signUp-content'>
                    <form className='formSign'>                    
                        <div className="formSign-left" id='part1'>
                            <p className="formSign-title">Información del usuario:</p>
                            <div className='formSign-content'>
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
                                <label>Confirmar Contraseña: </label>
                                <br></br>
                                <input type="password"></input>
                            </div>
                        </div>
                        
                        <hr className="line1"></hr>

                        <div className="right" id="part2">
                            <p className="formSign-title">Información del cliente:</p>
                            <div className='formSign-right-content'>
                                <label>Nombre: </label>
                                <br></br>
                                <input type="text"></input>
                                <br></br>
                                <br></br>
                                <label>Apellidos: </label>
                                <br></br>
                                <input type="text"></input>
                                <br></br>
                                <br></br>
                                <label>DNI: </label>
                                <br></br>
                                <input type="text"></input>
                                <br></br>
                                <br></br>
                                <label>Teléfono de contacto: </label>
                                <br></br>
                                <input type="number"></input>
                            </div>
                        </div>

                        <hr className="line2"></hr>

                        <button type="submit" className="sign-button" onClick={goesToLogin}>Enviar</button>
                    </form>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}