import React, { useState, useEffect } from 'react';
import { Button, Modal, Input } from 'antd';

const EditIncidence = ({isModalOpen ,setIsModalOpen, incidenceSelected, onHandleShowList}) => {
    console.log("inc", incidenceSelected?.tipo_problema)
    const [observations, setObservations] = useState(null)
    const [state, setState] = useState(null)
    
    useEffect(() => {
        setObservations(incidenceSelected?.observaciones)        
        setState(incidenceSelected?.estado)
    }, [incidenceSelected])

  const handleOk = () => {
    const body ={
        observations: observations,
        state: state
    }
    fetch(`http://127.0.0.1:5000/incidences/edit/${incidenceSelected?.codigo}`, 
        {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then((response) =>
            {
                if (response.isValidUpdated){
                    onHandleShowList()
                }else {
                    alert(response.errorDescription)
                }
            }
            )
        .catch(error => console.log(error))

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal title="Editar Incidencia" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {
          incidenceSelected?.tipo_problema == 'Problema con el vehículo' ?
          <div>
            <label><b>Observaciones:</b></label>
            <Input placeholder="Introduce las observaciones" value={observations} onChange={(e) => setObservations(e.target.value)}/>
            <br></br>
          </div>
          : <></>
        }
        <br></br>
        <label><b>Estado:</b></label>
        <Input placeholder="Introduce el estado" value={state} onChange={(e) => setState(e.target.value)}/>
      </Modal>
    </>
  );
};

export default EditIncidence;