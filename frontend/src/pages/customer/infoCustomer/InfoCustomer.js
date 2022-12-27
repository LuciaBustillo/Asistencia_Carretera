import './InfoCustomer.css';
import HeaderCustomer from '../headerCustomer/HeaderCustomer';
import Footer from '../../footer/footer';

export default function InfoCustomer() {

    return (
        <>
            <HeaderCustomer />

            <div className='info-content'>
                <div className='info-content-list'>INFO</div>
            </div>

            <Footer />
        </>
    )
}