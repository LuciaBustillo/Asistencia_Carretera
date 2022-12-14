import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Select } from "react-responsive-select";
import { useState } from 'react';
import './SignUp.css';

export default function SignUp() {
    const navigate = useNavigate();

    const optionsMake = [
        { value: 'select', text:'Selecciona:' },
        { value: 'abarth', text: 'Abarth' },
        { value: 'alfa', text: 'Alfa Romeo' },
        { value: 'aston', text: 'Aston Martin' },
        { value: 'audi', text: 'Audi' },
        { value: 'bentley', text: 'Bentley' },
        { value: 'bmw', text: 'BMW' },
        { value: 'cadillac', text: 'Cadillac' },
        { value: 'caterham', text: 'Caterham' },
        { value: 'chevrolet', text: 'Chevrolet' },
        { value: 'citroen', text: 'Citroen' },
        { value: 'dacia', text: 'Dacia' },
        { value: 'ferrari', text: 'Ferrari' },
        { value: 'fiat', text: 'Fiat' },
        { value: 'ford', text: 'Ford' },
        { value: 'honda', text: 'Honda' },
        { value: 'Infiniti', text: 'Infiniti' },
        { value: 'Isuzu', text: 'Isuzu' },
        { value: 'Iveco', text: 'Iveco' },
        { value: 'Jaguar', text: 'Jaguar' },
        { value: 'Jeep', text: 'Jeep' },
        { value: 'kia', text: 'Kia' },
        { value: 'ktm', text: 'KTM' },
        { value: 'lada', text: 'Lada' },
        { value: 'lamborghini', text: 'Lamborghini' },
        { value: 'lacia', text: 'Lancia' },
        { value: 'land', text: 'Land Rover' },
        { value: 'lexus', text: 'Lexus' },
        { value: 'lotus', text: 'Lotus' },
        { value: 'maserati', text: 'Maserati' },
        { value: 'mazda', text: 'Mazda' },
        { value: 'mercedes', text: 'Mercedes-Benz' },
        { value: 'mini', text: 'Mini' },
        { value: 'mitsubishi', text: 'Mitsubishi' },
        { value: 'morgan', text: 'Morgan' },
        { value: 'nissan', text: 'Nissan' },
        { value: 'opel', text: 'Opel' },
        { value: 'peugeot', text: 'Peugeot' },
        { value: 'piaggio', text: 'Piaggio' },
        { value: 'porsche', text: 'Porsche' },
        { value: 'renault', text: 'Renault' },
        { value: 'rolls', text: 'Rolls-Royce' },
        { value: 'seat', text: 'Seat' },
        { value: 'skoda', text: 'Skoda' },
        { value: 'smart', text: 'Smart' },
        { value: 'ssangyoung', text: 'SsangYong' },
        { value: 'subaru', text: 'Subaru' },
        { value: 'tata', text: 'Tata' },
        { value: 'tesla', text: 'Tesla' },
        { value: 'toyota', text: 'Toyota' },
        { value: 'volkswagen', text: 'Volkswagen' },
        { value: 'volvo', text: 'Volvo' }
    ]

    const optionsSeg = [
        { value: 'select', text:'Selecciona:'},
        { value: 'ama', text:'AMA'},
        { value: 'axa', text:'AXA'},
        { value: 'allianz', text:'Allianz'},
        { value: 'atlantis', text:'Atlantis'},
        { value: 'balumba', text:'Balumba'},
        { value: 'caser', text:'Caser'},
        { value: 'catalana', text:'Catalana Occidente'},
        { value: 'das', text:'DAS'},
        { value: 'direct', text:'Direct Seguros'},
        { value: 'europ', text:'Europ – Assistance'},
        { value: 'fiatc', text:'Fiatc'},
        { value: 'fenix', text:'Fénix Directo'},
        { value: 'ges', text:'GES'},
        { value: 'generali', text:'Generali'},
        { value: 'grupo', text:'Grupo Liberty'},
        { value: 'genesis', text:'Génesis'},
        { value: 'ima', text:'Ima Ibérica'},
        { value: 'lagun', text:'Lagun Aro'},
        { value: 'legalitas', text:'Legálitas'},
        { value: 'linea', text:'Línea Directa'},
        { value: 'mgs', text:'MGS'},
        { value: 'mmt', text:'MMT'},
        { value: 'mapfre', text:'Mapfre'},
        { value: 'mussap', text:'Mussap'},
        { value: 'mutua', text:'Mutua Madrileña'},
        { value: 'mutualidad', text:'Mutualidad de Levante'},
        { value: 'nuez', text:'Nuez'},
        { value: 'pSN', text:'PSN'},
        { value: 'pelayo', text:'Pelayo'},
        { value: 'plus', text:'Plus Ultra'},
        { value: 'qualitas', text:'Qualitas Auto'},
        { value: 'racc', text:'RACC'},
        { value: 'race', text:'Race'},
        { value: 'reale', text:'Reale'},
        { value: 'regal', text:'Regal'},
        { value: 'segurcaixa', text:'SegurCaixa Adeslas'},
        { value: 'seguros', text:'Seguros Bilbao'},
        { value: 'verti', text:'Verti'},
        { value: 'xenasegur', text:'Xenasegur'},
        { value: 'zurich', text:'Zurich'}
    ]

    const optionsModel = [
        { value:'', text:'Selecciona:'},
    ]
    
    const modelAbarth = [
        { value: 'select', text:'Selecciona:'},
        { value: '500', text:'500:'},
        { value: '500C', text:'500C:'}
    ]

    const modelAlfa = [
        { value: 'select', text:'Selecciona:'},
        { value: 'stelvio', text:'Alfa Romeo Stelvio:'},
        { value: 'giulia', text:'Alfa Romeo Giulia:'},
        { value: 'tonale', text:'Alfa Romeo Tonale:'},
    ]

    function goesToLogin() {
        navigate('/logIn')
    }

    return (
        <div className="content">
            <h1 className='title'>AsistRoad</h1> 

            <hr className="line"></hr>

            <form className='formSign'>
                <label className='title2'>Registro:</label>

                <hr className="line"></hr>
                
                <div className="left" id='part1'>
                    <h2><b className="title3">Información del usuario:</b></h2>
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
                    <label>Confirm Password: </label>
                    <br></br>
                    <input type="password"></input>
                </div>
                
                <hr className="line2"></hr>

                <div className="right" id="part2">
                    <h2><b>Información del cliente:</b></h2>
                        <label>Name: </label>
                        <br></br>
                        <input type="text"></input>
                        <br></br>
                        <br></br>
                        <label>Last Name: </label>
                        <br></br>
                        <input type="text"></input>
                        <br></br>
                        <br></br>
                        <label>DNI: </label>
                        <br></br>
                        <input type="text"></input>
                        <br></br>
                        <br></br>
                        <label>Phone: </label>
                        <br></br>
                        <input type="number"></input>
                        <br></br>
                </div>

                <hr className="line3"></hr>

                <div>
                    <Link to="/begin"><button className="buttons-form" id="link">Volver</button></Link>
                    <button type="submit" className="buttons-form" onClick={goesToLogin}>Enviar</button>
                </div>
            </form>
        </div>
    )
}