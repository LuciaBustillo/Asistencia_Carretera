import './offer.css';
import Header from '../header/header';
import Footer from '../footer/footer';

export default function Offer() {

    return (
        <div>
            <Header />
            <div className='offer'>
                <div className='offer1'>
                    <p className='text1'>Ofrecemos servicios fuera de tu póliza.</p>
                    <p className='text2'>Con el precio más económico.</p>
                    <p className='text3'>Cubrimos:</p>
                    <div class="content">
                        <div class="container">
                            <p class="container__text"> Asistencia </p>                            
                            <ul class="container__list">
                            <li class="container__list__item">grúas</li>
                            <li class="container__list__item">sanitaria</li>
                            <li class="container__list__item">policial</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    INFO2
                </div>
            </div>
            <Footer />
        </div>
    )
}