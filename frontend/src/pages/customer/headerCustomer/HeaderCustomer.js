import './HeaderCustomer.css';
import Home from '../../../img/iconos/homeCustomer/pagina-de-inicio.png';
import Incidence from '../../../img/iconos/homeCustomer/incidente.png';
import Info from '../../../img/iconos/homeCustomer/contacto.png';
import Exit from '../../../img/iconos/homeCustomer/cerrar-sesion.png';
import { useNavigate } from "react-router-dom";

export default function HeaderCustomer() {

    const navigate = useNavigate('/logIn');

    return (
        <div className='header-customer'>
            <button className='header-custom-button-end' onClick={() => {navigate('/begin')}}>
                <p className='header-custom-button-exit'>Cerrar Sesión</p>
                <img src={Exit} className='iconExit' />
            </button>
            <button className='header-custom-button' onClick={() => {navigate('/logIn/infoCustomer')}}>
                <p className='header-custom-button-info'>Información del usuario</p>
                <img src={Info} className='iconInfo' />
            </button>
            <button className='header-custom-button' onClick={() => {navigate('/logIn/incidences')}}>
                <p className='header-custom-button-form'>Formulario de Incidencias</p>
                <img src={Incidence} className='iconIncidence' />
            </button>
            <button className='header-custom-button-home' onClick={() => {navigate('/logIn/homeCustomer')}}>
                <p className='header-custom-button-homes'>Inicio</p>
                <img src={Home} className='iconHome' />
            </button>
            <p className='header-logo'><b>AsistRoad</b></p>
        </div>   
    )
}