import './Home.css';
import Map from './Map';
import Credentials from '../customer/incidences/Credentials';


export default function Home() {

    const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;


    return (      
        <div className='info'>
            <br></br>
            <h2 className='title'>Bienvenido a nuestra aplicación de asistencia en carreteras: <b>AsistRoad</b></h2>
            <div className='card'>
                <p>Somos una empresa pequeña la cual abarcamos trabajo en todo Madrid.</p>
                Contamos con una sede en:
                <div className='col1'>
                    <Map
                        googleMapURL= {mapURL} 
                        containerElement= {<div style={{height: '15vw', width: '40vw'}} />}
                        mapElement={<div style={{height:"15vw"}} />}
                        loadingElement= {<p>Loading</p>}
                    />
                </div>
            </div>
        </div>
    )
}