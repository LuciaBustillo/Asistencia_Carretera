import { useState } from 'react';
import './Incidences.css';
import { Select } from 'react-responsive-select';
import Map from './Map';
import Credentials from './Credentials';

// for default styles...
import 'react-responsive-select/dist/react-responsive-select.css';

export default function Incidences() {

    const options = [
        { value: ''},
        { value: 'vehicle', text: 'Issue Vehicle' },
        { value: 'accident', text: 'Accident' }
    ]

    const optionsVehicle = [
        {},
        { value: 'suspension', text: 'Suspension arm' },
        { value: 'bar', text: 'Stabilizer bar' },
        { value: 'airbags', text: 'Airbags' },
        { value: 'bulbs', text: 'Light bulbs' },
        { value: 'headlights', text: 'Misaligned headlights' },
        { value: 'bodywork', text: 'Corrosion on bodywork' },
        { value: 'bearings', text: 'Bearings' },
        { value: 'catalytic', text: 'Catalytic converter' },
        { value: 'control', text: 'Electronic engine control unit' },
        { value: 'failures', text: 'Electronic failures' },
        { value: 'system', text: 'Electrical system' },
        { value: 'discs', text: 'Brake discs' },
        { value: 'rust', text: 'Brakes with rust' },
        { value: 'filter', text: 'Particulate filter' },
        { value: 'braking', text: 'Irregular braking' },
        { value: 'slack', text: 'Parking brake slack' },
        { value: 'leaks', text: 'Leaks' },
        { value: 'pads', text: 'Brake pads' },
        { value: 'cover', text: 'Dust cover' },
        { value: 'pipe', text: 'Exhaust pipe' },
        { value: 'brackets', text: 'Brackets' },
        { value: 'ball', text: 'Ball joints' }
    ]

    const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;

    const[ selectedOption, setSelectedOption ] = useState('');
    const [ selectInjuries, setSelectInjuries ] = useState('No');

    function handleSelected({value}) {
        setSelectedOption(value)
    }

    const handleInjuries = e => {
        setSelectInjuries(e.target.value)
    }

        return (
            <div>
                <h1 className='title'>AsistRoad</h1> 
                <hr className="line"></hr>
                <form className='formIncidences'>
                    <h2 className='title3'>Incidences:</h2>
                    <hr className='line'></hr>
                    <div className='part1'>
                        <label>Problem type:</label>
                        <br></br>
                        <br></br>
                        <div className='selects'>
                            <Select options={options} className='select' onChange={handleSelected}/>
                        </div>
                        <div>
                            {
                                (selectedOption == '') ?
                                    <p></p> :
                                    (selectedOption == 'vehicle') ?
                                    <div>
                                        <br></br>
                                        <label>Type of vehicle problem:</label>
                                        <br></br>
                                        <br></br>
                                        <Select options={optionsVehicle} className='select' />
                                        <br></br>
                                        <br></br>
                                    </div> 
                                :
                                    <div>
                                        <br></br>
                                        <label>Have you suffered personal injuries?</label>
                                        <br></br>
                                        <br></br>
                                        <div className='radio'>
                                            <input type='radio' name='injury' value='Yes' checked={selectInjuries == 'Yes' ? true : false} onChange={handleInjuries} /><label className='radios'>Yes</label>
                                            <input type='radio' name='injury' value='No' checked={selectInjuries == 'No' ? true : false} onChange={handleInjuries} /><label className='radios'>No</label>
                                        </div>
                                        <div>
                                            {
                                                (selectInjuries == 'Yes') ?
                                                <div>
                                                    <br></br>
                                                    <label>Urgency level:</label>
                                                    <br></br>
                                                    <br></br>
                                                    <div className='urgency'>
                                                        <input className='urg' type='radio' name='urgency' value='1' /><label className='radios'>Low</label>
                                                        <br></br>
                                                        <input className='urg' type='radio' name='urgency' value='2'/><label className='radios'>Medium</label>
                                                        <br></br>
                                                        <input className='urg' type='radio' name='urgency' value='3'/><label className='radios'>High</label>
                                                    </div>
                                                    <br></br>
                                                    <br></br>
                                                </div> 
                                                :
                                                <div className='result'>
                                                    <p><b>( PD: We are glad you are not injured. )</b></p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                            }

                        </div>                        
                    </div>
    
                    <hr className='line4'></hr>
    
                    <div className='part2'>
                        
                        <hr className='line'></hr>
                        <p className='title5'><b>Other Information:</b></p>
                        <label>Location:</label>
                        <br></br><br></br>
                        <div className='col1'>
                            <Map
                                googleMapURL= {mapURL} 
                                containerElement= {<div style={{height: '15vw', width: '40vw'}} />}
                                mapElement={<div style={{height:"15vw"}} />}
                                loadingElement= {<p>Loading</p>}
                            />
                        </div>
                        <br></br>
                        <label>Payment method:</label>
                        <br></br>
                        <div className='radio1'>
                            <input type='radio' name='pay' value='paypal' /><label className='radios'>PayPal</label>
                            <br></br>
                            <input type='radio' name='pay' value='creditcard'/><label className='radios'>Credit Card</label>
                        </div>
                        <br></br>
                        <button type="submit" className="buttons-form" id='sub'>Submit</button>
                    </div>
                </form>
            </div>
        )

    
}