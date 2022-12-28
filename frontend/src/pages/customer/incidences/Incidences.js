import './Incidences.css';
import HeaderCustomer from '../headerCustomer/HeaderCustomer';
import Footer from '../../footer/footer';
import { useState } from 'react';
import { Select } from 'react-responsive-select';
import Map from './Map';
import Credentials from './Credentials';
import 'react-responsive-select/dist/react-responsive-select.css';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import AsistenciaContext from '../../../context/AsistenciaContext';

export default function Incidences() {
    const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;

    const [ registration, setRegistration ] = useState(null)
    const [ selectedProblem, setSelectedProblem ] = useState(null);
    const [ selectedProblemVehicle, setSelectedProblemVehicle ] = useState(null);
    const [ selectInjuries, setSelectInjuries ] = useState('No');
    const [ observations, setObservations ] = useState(null)
    const [ urgency, setUrgency ] = useState(null)
    const [ localization, setLocalization ] = useState(null)
    const [ state, setState ] = useState('pendiente aprobacion')

    const {idUser} = useContext(AsistenciaContext);

    const navigate = useNavigate();

    const options = [
        {},
        { value: 'Problema con el vehículo', text: 'Problema con el vehículo' },
        { value: 'Accidente', text: 'Accidente' }
    ]

    const optionsVehicle = [
        {},
        { value: 'Alimentación', text: 'Alimentación' },
        { value: 'Batería', text: 'Batería' },
        { value: 'Combustible', text: 'Combustible' },
        { value: 'Fallos eléctricos', text: 'Fallos eléctricos' },
        { value: 'Fuga', text: 'Fuga' },
        { value: 'Intento de robo en el vehículo', text: 'Intento de robo en el vehículo' },
        { value: 'Motor', text: 'Motor' },
        { value: 'Neumáticos', text: 'Neumáticos' },
        { value: 'Pérdida de llaves', text: 'Pérdida de llaves' },
        { value: 'Sistemas de transmisión', text: 'Sistemas de transmisión'},
        { value: 'Otros', text: 'Otros'},
    ]

    function cleanStates(cleanInjuries = false){
        setSelectedProblemVehicle(null);
        setObservations(null);
        setUrgency(null)
        cleanInjuries ? setSelectInjuries(null) : <></>;
        
    }
    
    function handleSelected({value}) {
        setSelectedProblem(value)
        cleanStates(true)
        if (value === "Accidente"){
            setSelectInjuries("No")
        }
    }
    function handleProblemVehicle({value}) {
        console.log("Handle vehicle")
        selectedProblem == 'Problema con el vehículo' ?
            setSelectedProblemVehicle(value) && setSelectInjuries('')
            : 
            setSelectedProblemVehicle(null)

    }
    const handleInjuries = e => {
        setSelectInjuries(e.target.value) 
        cleanStates()
    }
    const handleUrgency = e => {
        setUrgency(e.target.value)
    }

    function goesToHome() {
        navigate('/logIn/homeCustomer')
    }

    const onHandleIncidence = e => {
        e.preventDefault()
        console.log(localization)
        
        const newIncidenceInsert = {
            registration: registration,
            problem: selectedProblem,
            problemVehicle: selectedProblemVehicle,
            injuries: selectInjuries,
            observations: observations,
            urgency: urgency,
            localization: localization,
            state: state,
            idUser: idUser
        }
        console.log(registration, selectedProblem, localization, state)

        if (!registration || !selectedProblem || !localization || !state){
            alert( "todos los campos son obligatorios");
        }else{
            fetch('http://127.0.0.1:5000/incidences', 
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(newIncidenceInsert)
            })
            .then(response => response.json())
            .then(
                    goesToHome()
                )
            .catch(error => console.log(error))
        }
    }

    

        return (
            <div>
                <HeaderCustomer />

                <div>
                    <p className='incidences-title'>Incidencias:</p>

                    <div className='incidences-content'>
                        <form className='formIncidences' onSubmit={(e)=>onHandleIncidence(e)}>
                            <div className='part1'>
                                <p className="formIncidences-title">Información del usuario:</p>

                                <label>Matrícula del coche:</label>
                                <br></br><br></br>
                                <input type='text' onChange={(e) => setRegistration(e.target.value)} />
                                <br></br><br></br>
                                
                                <label>Tipo de problema:</label>
                                <div className='selects'>
                                    <Select options={options} className='select' onChange={handleSelected}/>
                                </div>
                                <div>
                                    {
                                        (selectedProblem == null) ?
                                            <></> 
                                            :
                                            (selectedProblem == 'Problema con el vehículo') ?
                                                <div>
                                                    <br></br>
                                                    <label>Tipo de problema con el vehículo:</label>
                                                    <div className='selects'>
                                                        <Select options={optionsVehicle} className='select' onChange={handleProblemVehicle} />
                                                    </div>
                                                    <br></br>
                                                    {
                                                        (selectedProblemVehicle == 'Otros') ?
                                                            <div>
                                                                <label>Observaciones:</label>
                                                                <br></br>
                                                                <textarea className='obs-text' onChange={(e) => setObservations(e.target.value)} />
                                                            </div>
                                                            :
                                                            <div></div>
                                                    }
                                                </div> 
                                                :
                                                <div>
                                                    <br></br>
                                                    <label>¿Necesita una ambulancia?</label>
                                                    <br></br>
                                                    <br></br>
                                                    <div className='radio'>
                                                        <input type='radio' name='injury' value='Si' selected={selectInjuries == 'Si' ? true : false} onChange={handleInjuries} />
                                                            <label className='radios'>Si</label>
                                                        <input type='radio' name='injury' value='No' defaultChecked selected={selectInjuries == 'No' ? true : false} onChange={handleInjuries}/>
                                                            <label className='radios'>No</label>
                                                    </div>
                                                    <div>
                                                        {
                                                            (selectInjuries == 'Si') ?
                                                            <div  className='urgency-content'>
                                                                <br></br>
                                                                <label>Nivel de urgencia para asistencia sanitaria:</label>
                                                                <br></br>
                                                                <br></br>
                                                                <div className='urgency'>
                                                                    <input className='urg' id='low' type='radio' name='urgency' value='Bajo' onChange={handleUrgency} /><label className='radios'>Bajo</label>
                                                                    <br></br>
                                                                    <input className='urg' type='radio' name='urgency' value='Intermedio' onChange={handleUrgency}/><label className='radios'>Intermedio</label>
                                                                    <br></br>
                                                                    <input className='urg' type='radio' name='urgency' value='Prioritario' onChange={handleUrgency}/><label className='radios'>Prioritario</label>
                                                                </div>
                                                                <br></br>
                                                                <br></br>
                                                            </div> 
                                                            :
                                                            <div className='result'>
                                                                <p><b>( PD: Nos algramos de que no hayan sufrido ningún daño. )</b></p>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                    }

                                </div>                        
                            </div>
            
                            <hr className='line4'></hr>
            
                            <div className='part2'>
                                
                                <p className='title4'><b>Otra información:</b></p>

                                <label>Localización:</label>
                                <div className='map'>
                                    <Map 
                                        setLocalization = {setLocalization}
                                        googleMapURL= {mapURL} 
                                        containerElement= {<div style={{height: '20vw', width: '20vw'}} />}
                                        mapElement={<div style={{height:"20vw"}} />}
                                        loadingElement= {<p>Cargando...</p>}
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <hr className='line5'></hr>

                                <button type="submit" className="incidences-button">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>

                <Footer />
            </div>
        )

    
}