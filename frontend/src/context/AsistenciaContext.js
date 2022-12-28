import { createContext } from "react";

const AsistenciaContext =  createContext(
    { 
        user: "", 
        idUser: 0,
        setIdUser: () => {},
        setUser: () => {},
    }
);

export default AsistenciaContext;