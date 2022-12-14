import './offer.css';
import Header from '../header/header';
import Footer from '../footer/footer';

export default function Offer() {

    return (
        <div>
            <Header />
            <div className='offer'>
                <div>
                    <p>Ofrecemos servicios fuera de tu póliza.</p>
                    <p>Con el precio más económico.</p>
                    <p>Cubrimos:</p>
                    <ul>
                        <li>Servicios de grúa.</li>
                        <li>Servicios de asistencia sanitaria.</li>
                        <li>Servicios de asistencia policial.</li>
                    </ul>
                </div>
                <div>
                    INFO2
                </div>
            </div>
            <Footer />
        </div>
    )
}