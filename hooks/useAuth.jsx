import { useContext, useEffect } from 'react';
import useAsync from './useAsync';
import Router from 'next/router';
import AuthContext from '../context/auth/AuthContext';
import AuthApi from '../api/AuthApi';
import { isValStatus } from '../components/common/Validations';


const useAuth = () => {

    const { getUserAuth } = AuthApi();
    const { execute: getAuth, isLoading: isLoadingAuth, setLoading } = useAsync(getUserAuth, true);
    // Context y métodos en uso por parte del Compomente
    const { setUserAuth, usuario: { _id } } = useContext(AuthContext);

    // Elementos a ejecutar una vez cargado el componente
    useEffect(() => {
        let isMounted = true;
        
        (async () => {
            try {
                if (_id == "" || _id == null) {
                    const token = localStorage.getItem('id_token');
                    const hasToken = Boolean(token);
                    if (hasToken) {
                        const res = await getAuth();
                        if (isValStatus(res.status)) {
                            const { dataUser, cookieResource, token } = res.data;
                            //Cargar los datos autentificados
                            setUserAuth({
                                user: dataUser,
                                token,
                                cookieResource                                
                            });
                            return;
                        }
                    }
                    setLoading(false);
                    if (window.location.pathname != "/login") {
                        Router.push("/login");
                    }

                }
                setLoading(false);
                return;

            } catch (error) {
                console.error(error);
            }

            return () => { isMounted = false; };

        })();


    }, []);

    return { isLoadingAuth }
}
export default useAuth;