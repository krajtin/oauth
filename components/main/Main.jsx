import React from 'react';
import AuthApi from '../../api/AuthApi';
const { signInGoogle, signInAzure } = AuthApi();
const Main = () => {

    return (
        <>
            <div>
                <a href='http://localhost:3000/auth/google'>Pulsa para registrarte</a>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>AAAAAAAAAAAA</p>

        </>

    )


}
export default Main;