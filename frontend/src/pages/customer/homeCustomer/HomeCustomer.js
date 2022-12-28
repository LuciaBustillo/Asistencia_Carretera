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
                <div className='info-custom-one'>Bienvenido {user}</div>
            </div>

            <Footer />
        </div>
    )
}
