import { useCallback } from 'react';
import clienteAxios from '../config/axios';
import useError from '../hooks/useError';

const AuthApi = () => {

    const uri = "/auth";
    const { errorIsComing } = useError();


    
     const signInGoogle = async () => {
        try {
            // Llamada a la API del server
            const result = await clienteAxios.get('/auth/google');
            return result;
        } catch (error) {
            errorIsComing(error.response);
            return error;
        }
    };

   


    return {  signInGoogle };
}

export default AuthApi;