import './footer.css';
import Phone from '../../img/iconos/footer/telefono.png';
import Instagram from '../../img/iconos/footer/instagram.jpg';
import Twitter from '../../img/iconos/footer/twitter.JPG';
import Facebook from '../../img/iconos/footer/facebook.JPG';

export default function Footer() {
    return (
        <div className='footer'>
            <p className='text'>AsistRoad 2022 Todos los derechos reservados.</p>
            <p className='phone'>Llámanos</p><p className='phoneText'><img src={Phone} className='phoneImg' /> <b>91 899 69 47</b></p>
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
    )
}