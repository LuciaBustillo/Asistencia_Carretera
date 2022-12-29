import './InfoCustomer.css';
import HeaderCustomer from '../headerCustomer/HeaderCustomer';
import Footer from '../../footer/footer';
import { useContext, useState, useEffect } from 'react';
import { Button } from 'antd';
import AsistenciaContext from '../../../context/AsistenciaContext';
import TableInfoCustomer from './TableInfoCustomer';
import EditIncidence from './EditIncidence';

export default function InfoCustomer() {

    const {idUser} = useContext(AsistenciaContext);
    const [listIncidences, setListIncidences] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [incidenceSelected, setIncidenceSelected] = useState(null)

    const showModal = () => {
      setIsModalOpen(true);
    };

    useEffect(() => {
        onHandleShowList();
    }, []);
    
    const onHandleShowList = ()=>{

        fetch(`http://127.0.0.1:5000/incidences/${idUser}`, 
        {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => 
            {
                setListIncidences(response.incidencias)
            })
        .catch(error => console.log(error))
    }
    
    return (
        <>
            <HeaderCustomer />

            <div className='info-content'>
                <TableInfoCustomer listIncidences={listIncidences} onHandleShowList={onHandleShowList} isModalOpen={isModalOpen} setIsModalOpen= {setIsModalOpen} setIncidenceSelected={setIncidenceSelected} />
            </div>
            <EditIncidence isModalOpen={isModalOpen} setIsModalOpen= {setIsModalOpen} incidenceSelected={incidenceSelected} onHandleShowList={onHandleShowList} />
            <Footer />
        </>
    )
}