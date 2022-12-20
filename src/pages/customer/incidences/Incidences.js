import './Incidences.css';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import { useState } from 'react';
import { Select } from 'react-responsive-select';
import Map from './Map';
import Credentials from './Credentials';

// for default styles...
import 'react-responsive-select/dist/react-responsive-select.css';

export default function Incidences() {
    const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;

    const [ selectedProblem, setSelectedProblem ] = useState('');
    const [ selectedProblemVehicle, setSelectedProblemVehicle ] = useState('');
    const [ selectInjuries, setSelectInjuries ] = useState('No');

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

    function handleSelected({value}) {
        setSelectedProblem(value)
    }

    function handleProblemVehicle({value}) {
        selectedProblem == 'Problema con el vehículo' ?
            setSelectedProblemVehicle(value) 
            : 
            setSelectedProblemVehicle(null)

    }

    const handleInjuries = e => {
        selectedProblem == 'Accidente' ?
            setSelectInjuries(e.target.value) 
            : 
            setSelectInjuries(null)
    }

        return (
            <div>
                <Header />

                <div>
                    <p className='incidences-title'>Incidencias:</p>

                    <div className='incidences-content'>
                        <form className='formIncidences'>
                            <div className='part1'>
                                <p className="formIncidences-title">Información del usuario:</p>

                                <label>Matrícula del coche:</label>
                                <br></br><br></br>
                                <input type='text' />
                                <br></br><br></br>
                                
                                <label>Tipo de problema:</label>
                                <div className='selects'>
                                    <Select options={options} className='select' onChange={handleSelected}/>
                                </div>
                                <div>
                                    {
                                        (selectedProblem == '') ?
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
                                                                <textarea className='obs-text' />
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
                                                                    <input className='urg' id='low' type='radio' name='urgency' value='Bajo' /><label className='radios'>Bajo</label>
                                                                    <br></br>
                                                                    <input className='urg' type='radio' name='urgency' value='Intermedio'/><label className='radios'>Intermedio</label>
                                                                    <br></br>
                                                                    <input className='urg' type='radio' name='urgency' value='Prioritario'/><label className='radios'>Prioritario</label>
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