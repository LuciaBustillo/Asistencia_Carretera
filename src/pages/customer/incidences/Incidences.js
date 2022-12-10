import { useState } from 'react';
import './Incidences.css';
import { Select } from 'react-responsive-select';
import Map from './Map';
import Credentials from './Credentials';

// for default styles...
import 'react-responsive-select/dist/react-responsive-select.css';

export default function Incidences() {
    const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;

    const [ selectedProblem, setSelectedProblem ] = useState('');
    const [ selectedProblemVehicle, setSelectedProblemVehicle ] = useState('');
    const [ selectInjuries, setSelectInjuries ] = useState('');

    const options = [
        { value: ''},
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
    ]

    function handleSelected({value}) {
        setSelectedProblem(value)
    }
    console.log(selectedProblem)

    function handleProblemVehicle({value}) {
        selectedProblem == 'Problema con el vehículo' ?
        setSelectedProblemVehicle(value) : setSelectedProblemVehicle(null)

    }
    console.log(selectedProblemVehicle)

    const handleInjuries = e => {
        selectedProblem == 'Accidente' ?
        setSelectInjuries(e.target.value) : setSelectInjuries(null)
    }
    console.log(selectInjuries)

        return (
            <div className='content'>
                <h1 className='title'>AsistRoad</h1> 
                <hr className="line"></hr>
                <form className='formIncidences'>
                    <h2 className='title3'>Incidencias:</h2>
                    <hr className='line'></hr>
                    <div className='part1'>
                        <label>Tipo de problema:</label>
                        <br></br>
                        <br></br>
                        <div className='selects'>
                            <Select options={options} className='select' onChange={handleSelected}/>
                        </div>
                        <div>
                            {
                                (selectedProblem == '') ?
                                    <p></p> :
                                    (selectedProblem == 'Problema con el vehículo') ?
                                    <div>
                                        <br></br>
                                        <label>Tipo de problema con el vehículo:</label>
                                        <br></br>
                                        <br></br>
                                        <div className='selects'><Select options={optionsVehicle} className='select' onChange={handleProblemVehicle} /></div>
                                        <br></br>
                                        <br></br>
                                    </div> 
                                :
                                    <div>
                                        <br></br>
                                        <label>¿Has sufrido algún daño?</label>
                                        <br></br>
                                        <br></br>
                                        <div className='radio'>
                                            <input type='radio' name='injury' value='Si' checked={selectInjuries == 'Si' ? true : false} onChange={handleInjuries} /><label className='radios'>Si</label>
                                            <input type='radio' name='injury' value='No' checked={selectInjuries == 'No' ? true : false} onChange={handleInjuries} /><label className='radios'>No</label>
                                        </div>
                                        <div>
                                            {
                                                (selectInjuries == 'Yes') ?
                                                <div>
                                                    <br></br>
                                                    <label>Nivel de urgencia para asistencia hospitalaria:</label>
                                                    <br></br>
                                                    <br></br>
                                                    <div className='urgency'>
                                                        <input className='urg' type='radio' name='urgency' value='Bajo' /><label className='radios'>Bajo</label>
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
                                                    <p><b>( PD: Nos algramos de que no haya sufrido ningún daño. )</b></p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                            }

                        </div>                        
                    </div>
    
                    <hr className='line4'></hr>
    
                    <div className='part2'>
                        
                        <p className='title5'><b>Otra información:</b></p>
                        <label>Localización:</label>
                        <br></br><br></br>
                        <div className='col1'>
                            <Map
                                googleMapURL= {mapURL} 
                                containerElement= {<div style={{height: '15vw', width: '30vw'}} />}
                                mapElement={<div style={{height:"15vw"}} />}
                                loadingElement= {<p>Cargando...</p>}
                            />
                        </div>
                        <br></br>
                        <label>Método de pago:</label>
                        <br></br>
                        <div className='radio1'>
                            <input type='radio' name='pay' value='paypal' /><label className='radios'>PayPal</label>
                            <br></br>
                            <input type='radio' name='pay' value='creditcard'/><label className='radios'>Tarjeta de Crédito</label>
                        </div>
                        <br></br>
                    </div>
                    
                    <div>
                        <hr className='line5'></hr>

                        <button type="submit" className="buttons-form" id='sub'>Enviar</button>

                    </div>
                </form>
            </div>
        )

    
}