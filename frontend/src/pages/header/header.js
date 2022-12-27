import './header.css';
import IconHome from '../../img/iconos/header/pagina-de-inicio.png';
import IconCar from '../../img/iconos/header/icono-coche.png';
import IconCustomer from '../../img/iconos/header/icono-cliente.png';
import IconUs from '../../img/iconos/header/icono-us.png';
import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    return (
        <div className='header'>
            <button className='header-button' id='us'>
                <p className='header-us'>Sobre nosotros</p>
                <img src={IconUs} className='iconUs' />
            </button>
            <button className='header-button' onClick={() => navigate('/begin')}>
                <p className='header-custom'>Área para clientes</p>
                <img src={IconCustomer} className='iconCustomer' />
            </button>
            <button className='header-button' onClick={() => navigate('/offer')}>
                <p className='header-car'>¿Que cubrimos?</p>
                <img src={IconCar} className='iconCar' />
            </button>
            <button className='header-button-home' onClick={() => navigate('/')}>
                <p className='header-home'>Inicio</p>
                <img src={IconHome} className='iconHome' />
            </button>
            <p className='header-logo'><b>AsistRoad</b></p>
        </div>
    )
}