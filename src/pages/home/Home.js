import './Home.css';
import Instagram from '../../img/logos/instagram.jpg';
import Twitter from '../../img/logos/twitter.JPG';
import Facebook from '../../img/logos/facebook.JPG';
import logoAsistRoad from '../../img/logoAsistRoad.JPG';
import { useNavigate } from "react-router-dom";


export default function Home() {

    const navigate = useNavigate();


    return (      
        <div className='info'>
            <div className='menu'>
                <img src={logoAsistRoad} ></img>
                <button className='menu-button' onClick={() => navigate('begin')} >Área para clientes</button>
            </div>
            <br></br>
            <h2 className='title'>
                <b>AsistRoad</b>
                <br></br>
                Bienvenido a nuestra aplicación de asistencia en carreteras.</h2>
            <div className='infos'>
                <div className='info1'>
                    <p>Somos una pequeña empresa la cual proporcionamos asistencia en carretera en todo Madrid.
                        <br></br>
                    Contamos con una sede en:
                        <br></br>
                    <b>Av. de Ciudad de Santander, 36, 28660 Boadilla del Monte, Madrid</b></p>
                </div>
                <div className='info2'>
                    <p>Proporcionamos asistencia sin necesidad de tener que acudir a nadie más. 
                        <br></br>
                    AsistRoad permite asistencia de <b>grúas, ambulancias</b> y <b>policias.</b></p>
                </div>
            </div>
            <div className='footer'>
                <p className='text'>AsistRoad 2022 Todos los derechos reservados</p>
                <div className='logos'>
                    <a href='https://twitter.com/?lang=es'>
                        <img className='twitter' src={Twitter} />
                    </a>
                    <a href='https://es-es.facebook.com/'>
                        <img className='face' src={Facebook} />
                    </a>
                    <a href='https://www.instagram.com/'>
                        <img className='insta' src={Instagram} />
                    </a>
                </div>
            </div>
        </div>
    )
}