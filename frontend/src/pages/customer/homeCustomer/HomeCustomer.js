import './HomeCustomer.css';
import HeaderCustomer from '../headerCustomer/HeaderCustomer';
import Footer from '../../footer/footer';
import { useContext } from 'react';
import AsistenciaContext from '../../../context/AsistenciaContext';

export default function HomeCustomer() {
    const {user} = useContext(AsistenciaContext);
    
    return (
        <div>
            <HeaderCustomer />

            <div className='info-custom'>
                <div className='info-custom-one'>
                    <p>Bienvenido {user.charAt(0).toUpperCase()  + user.slice(1)} a tu área de cliente.</p>
                    <p>Aquí podrás realizar tus formularios de incidencias y solicitar tu información.</p>
                    <br></br>
                    <p>Si tienes algún problema, no dudes en contactar con nosotros:</p>
                    <p className='info-custom-one-phone'>91 899 69 47</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}
