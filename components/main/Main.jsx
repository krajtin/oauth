import React from 'react';
import AuthApi from '../../api/AuthApi';
const { signInGoogle } = AuthApi();    
const Main = () => {

    return (
        <button onClick={signInGoogle}>Pulsa para registrarte</button>
    )


}
export default Main;