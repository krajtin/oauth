import { useCallback } from 'react';
import clienteAxios from '../config/axios';
import useError from '../hooks/useError';

const AuthApi = () => {

    const uri = "/auth";
    const { errorIsComing } = useError();


    
     const signInGoogle = async () => {
        try {
            // Llamada a la API del server
            const result = await clienteAxios.get('http://localhost:3000/auth/google');
            return result;
        } catch (error) {
            errorIsComing(error.response);
            return error;
        }
    };

    const signInAzure = async () => {
        try {
            // Llamada a la API del server
            const result = await clienteAxios.post('https://login.microsoftonline.com/98f4b976-ba31-4d3e-ad9c-332eb5a36ca8/oauth2/v2.0/authorize');
            return result;
        } catch (error) {
            errorIsComing(error.response);
            return error;
        }
    };

   


    return {  signInGoogle, signInAzure };
}

export default AuthApi;