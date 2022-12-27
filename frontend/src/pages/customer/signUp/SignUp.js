import './SignUp.css';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function SignUp() {

    const navigate = useNavigate();

    const [newUser, setNewUser] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dni, setDni] = useState('');
    const [phone, setPhone] = useState('');

    function goesToLogin() {
        navigate('/logIn')
    }

    const onHandleRegister = (e) => {
        e.preventDefault()
        
        const newUserInsert = {
            user: newUser,
            password : newPassword,
            confirmPassword: confirmNewPassword,
            name: name,
            lastName: lastName,
            dni: dni,
            phone: phone
        }

        if (!newUser || !newPassword || !confirmNewPassword || !name || !lastName || !dni || !phone){
            alert( "todos los campos son obligatorios");
        }else{
            fetch('http://127.0.0.1:5000/register', 
            {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUserInsert)
            })
            .then(response => response.json())
            .then(response => 
                {
                    response.isValidInserted == 1 ?
                    goesToLogin()
                    :
                        alert(response.errorDescription)
                })
            .catch(error => console.log(error))
        }
    }

    return (
        <div>
            <Header />

            <div className="signUp">
                <p className='signUp-title'>Registro:</p>

                <div className='signUp-content'>
                    <form className='formSign' onSubmit={(e)=>onHandleRegister(e)}>                    
                        <div className="formSign-left" id='part1'>
                            <p className="formSign-title">Información del usuario:</p>
                            <div className='formSign-content'>
                                <label>Usuario: </label>
                                <br></br>
                                <input type="text" onChange={(e) => setNewUser(e.target.value)}></input>
                                <br></br>
                                <br></br>
                                <label>Contraseña: </label>
                                <br></br>
                                <input type="password" onChange={(e) => setNewPassword(e.target.value)}></input>
                                <br></br>
                                <br></br>
                                <label>Confirmar Contraseña: </label>
                                <br></br>
                                <input type="password" onChange={(e) => setConfirmNewPassword(e.target.value)}></input>
                            </div>
                        </div>
                        
                        <hr className="line1"></hr>

                        <div className="right" id="part2">
                            <p className="formSign-title">Información del cliente:</p>
                            <div className='formSign-right-content'>
                                <label>Nombre: </label>
                                <br></br>
                                <input type="text" onChange={(e) => setName(e.target.value)}></input>
                                <br></br>
                                <br></br>
                                <label>Apellidos: </label>
                                <br></br>
                                <input type="text" onChange={(e) => setLastName(e.target.value)}></input>
                                <br></br>
                                <br></br>
                                <label>DNI: </label>
                                <br></br>
                                <input type="text" onChange={(e) => setDni(e.target.value)}></input>
                                <br></br>
                                <br></br>
                                <label>Teléfono de contacto: </label>
                                <br></br>
                                <input type="number" onChange={(e) => setPhone(e.target.value)}></input>
                            </div>
                        </div>

                        <hr className="line2"></hr>

                        <button type="submit" className="sign-button">Enviar</button>
                    </form>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}