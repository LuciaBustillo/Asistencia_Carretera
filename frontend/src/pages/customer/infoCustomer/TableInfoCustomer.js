import { Space, Table, Tag } from 'antd';

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
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>        
            )
        }
    }
  },
];

const TableInfoCustomer = ({listIncidences}) => <Table columns={columns} dataSource={listIncidences} />;

export default TableInfoCustomer;