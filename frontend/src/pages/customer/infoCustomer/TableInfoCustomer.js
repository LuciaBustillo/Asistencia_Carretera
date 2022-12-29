import { Space, Table, Tag, Popconfirm } from 'antd';
import { useState } from 'react';

const TableInfoCustomer = ({listIncidences, onHandleShowList, isModalOpen , setIsModalOpen, setIncidenceSelected}) => 
  {
    const handleDelete = (codigo)=>{
      // conectar con el servicio de delete

      fetch(`http://127.0.0.1:5000/incidences/delete/${codigo}`, 
        {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((response) =>
            {
                if (response.isDeleted){
                    onHandleShowList()
                }else {
                    alert(response.errorDescription)
                }
            }
            )
        .catch(error => console.log(error))
    }   
  
    const columns = [
      {
        title: 'Matricula',
        dataIndex: 'matricula',
        key: 'matricula',
      },
      {
        title: 'Tipo problema',
        dataIndex: 'tipo_problema',
        key: 'tipo_problema',
      },
      {
        title: 'Problema con el vehiculo',
        dataIndex: 'problema_vehiculo',
        key: 'problema_vehiculo',
      },
      {
        title: 'Observaciones',
        dataIndex: 'observaciones',
        key: 'observaciones',
      },
      {
        title: 'Daños',
        dataIndex: 'daños',
        key: 'daños',
      },
      {
        title: 'Urgencia',
        dataIndex: 'urgencia',
        key: 'urgencia',
      },
      {
        title: 'Localización latitud',
        dataIndex: 'localizacionLat',
        key: 'localizacionLat',
      },
      {
        title: 'Localización longitud',
        dataIndex: 'localizacionLng',
        key: 'localizacionLng',
      },
      {
        title: 'Estado',
        key: 'estado',
        dataIndex: 'estado',
        render: (_, { estado }) => {
            let color = 'geekblue'
            switch(estado){
                case "pendiente aprobacion" :  
                    color = 'cyan'
                    break;
                case "aceptada" :
                    color = 'blue'
                    break;
                case "en tramite-cerrada" :
                    color = 'orange'
                    break;
                case "realizada" :
                    color = 'green'
                    break;
                case "rechazada" :
                    color = 'red'
                    break;
            }
            return (
                <Tag color={color} >
                    {estado}
                </Tag>
            );
        }
      },
      {
        title: 'Actions',
        key: 'action',
        render: (_, record) => {
            if (record.estado == 'pendiente aprobacion') {
                return (
                    <Space size="middle">
                        <a onClick={() => {
                          setIsModalOpen(true)
                          setIncidenceSelected(record)
                        }}>Edit</a>
                        <Popconfirm
                          title="Borrar incidencia"
                          description="¿Estás seguro de querer borrar la incidencia?"
                          onConfirm={()=>handleDelete(record.codigo)}
                          okText="Si"
                          cancelText="No"
                        >
                        <a>Delete </a>
                      </Popconfirm>
                    </Space>        
                )
            }
        }
      },
    ];

    return(<Table columns={columns} dataSource={listIncidences} rowKey="codigo" />);
  }
 

export default TableInfoCustomer;