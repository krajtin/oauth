/*===================================================================================
=   Fichero: useAsync.js                                                   =
=   Hook: useAsync                                                   =
=   Descripción: Hook que gestiona una petición async (normalmente api) con un estado de cargando.  =
=                Devuelve una promesa con información solicitada   =
=   Fecha: Agosto 2021                                                             =
=   Dev: Daniel Fernández                                                              =
=   Versión: 1.0                                                                    =
=====================================================================================*/

import { useCallback, useState, useRef } from "react";

const useAsync = (asyncFunction, isLoad = false) => {

  const [isLoading, setLoading] = useState(isLoad);
  const [res, setRes] = useState({
    data: null,
    status: 500,
  });
  
  const isCalled = useRef(false);
  const execute = useCallback(
    (...dataArguments) => {
      try {
        if (!isCalled.current) {
          isCalled.current = true;
          setLoading(true);
          return asyncFunction(...dataArguments).then((_res) => {
            setLoading(false);
            setRes(_res);
            isCalled.current = false;
            return _res;
          });
        }

      } catch (error) {
        isCalled.current = false;
        setLoading(false);
      }

    },
    [asyncFunction]
  );
  return { execute, isLoading, setLoading, res };
};

export default useAsync;
