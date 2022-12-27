import { createContext } from "react";

const AsistenciaContext =  createContext(
    { 
        user: "", 
        setUser: () => {},
    }
);

export default AsistenciaContext;