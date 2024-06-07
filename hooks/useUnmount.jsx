/*===================================================================================
=   Fichero: useUnMount.jsx                                                          =
=   Hook: useUnMount                                                                 =
=   Descripción: Hook para ejecutar una acción cuando el componente se desmonta.                  = 
=   Fecha: Septiembre 2021                                                             =
=   Dev: Daniel Fernández                                                           =
=   Versión: 1.0                                                                    =
=====================================================================================*/
import { useEffect, useRef } from "react";

/** Ejecuta una acción al desmontar el componente
 * @hook
 * @param {Function} callback Función al ejecutar cuando se desmonte el componente
 */
const useUnMount = (callback) => {

    const cbRef = useRef(callback);
    
    useEffect(() => {
        cbRef.current = callback;
    }, [callback]);

    useEffect(() => {
        return () => {
            //Se ejecuta cuando se desmonta
            cbRef.current();
        };
    }, []);
}
export default useUnMount;
