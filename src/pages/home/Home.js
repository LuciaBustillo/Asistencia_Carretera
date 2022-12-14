import './Home.css';
import Header from '../header/header';
import IconFast from '../../img/iconos/home/icono-reloj.png';
import IconBest from '../../img/iconos/home/icono-mejor.png';
import IconPolice from '../../img/iconos/home/icono-cobertura.png';
import Footer from '../footer/footer';
import IconCheap from '../../img/iconos/home/icono-dinero.png';
import { useNavigate } from "react-router-dom";


export default function Home() {

    const navigate = useNavigate();

    return (      
        <div>
            <Header />

            <div className='home-infos'>
                <div className='info1'>
                    <p>¿Sabías que hay situaciones que no cubren tu póliza?<br></br>Nosotros nos ocupamos.</p>
                    <p className='info1-text'>Si no eres cliente: <button className='info1-button' onClick={() => navigate('signUp')}>Registrate</button> </p>
                </div>
                <div className='info2'>
                    <p className='info2-text'>¿Qué ofrecemos?</p>
                    <div className='info2-1'>
                        <p>Asistencia rápida</p>
                        <img src={IconFast} className='icon1' />
                    </div>
                    <div className='info2-2'>
                        <p>El mejor servicio</p>
                        <img src={IconBest} className='icon2' />
                    </div>
                    <div className='info2-3'>
                        <p>Cobertura fuera de <br></br> tu póliza</p>
                        <img src={IconPolice} className='icon3' />
                    </div>
                    <div className='info2-4'>
                        <p>La cobertura más <br></br> económica</p>
                        <img src={IconCheap} className='icon4' />
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

/*
<p>Somos una pequeña empresa la cual proporcionamos asistencia en carretera para vehículos no asegurados en toda España.
                        <br></br>
                    Contamos con una sede en:
                        <br></br>
                    <b>Av. de Ciudad de Santander, 36, 28660 Boadilla del Monte, Madrid</b></p>
*/