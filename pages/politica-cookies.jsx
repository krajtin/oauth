import { Container, Typography } from '@mui/material';
import React from 'react';
import Title from '../components/common/title/Title';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const PoliticaCookies = ({ Component, pageProps }) => {

    return (
        <>
            <Container maxWidth={"xl"}>
                <Header />
            </Container>
            <Container maxWidth={"lg"} style={{paddingBottom: "2.5rem"}}>
                <Title text={"Política de Cookies"} />
                <Title className={"medium"} text={"DEFINICIÓN Y FUNCIONES DE LAS COOKIES"} />
                <Typography variant='paragraph' component={"p"}>Una cookie es un fichero que se descargan en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</Typography>
                <Title className={"medium"} text={"DEFINICIÓN"} />

                <Typography variant='paragraph' component={"p"}>Cookies técnicas: Permiten al usuario la navegación a través de una página web, plataforma y la utilización de las diferentes opciones o servicios que en ella existan, incluyendo la gestión y operativa de la página web y habilitar sus funciones y servicios, como, por ejemplo, identificar la sesión, acceder a partes de acceso restringido, … La página web no puede funcionar adecuadamente sin estas cookies por lo que se consideran necesarias.</Typography>

                <Typography variant='paragraph' component={"p"}>Cookies de análisis: Permiten el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida se utiliza en la medición de la actividad de nuestra página web y para la elaboración de perfiles de navegación de los usuarios con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</Typography>
                <Typography variant='paragraph' component={"p"}>Cookies publicitarías: Permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que se han incluido en nuestra página web en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.</Typography>
                <Title className={"medium"} text={"BLOQUEAR O ELIMINAR COOKIES"} />

                <Typography variant='paragraph' component={"p"}>Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Para más información de cada navegador pulse sobre los enlaces:</Typography>

                <p>
                    <a href='https://support.google.com/chrome/answer/95647'>https://support.google.com/chrome/answer/95647</a>
                </p>
                <br />
                <p>
                    <a href='https://support.apple.com/es-es/guide/safari/sfri11471'>https://support.apple.com/es-es/guide/safari/sfri11471</a>
                </p>
                <br />
                <p>
                    <a href='https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias'>https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias</a>
                </p>
                <br />
                <p>
                    <a href='https://support.microsoft.com/es-es/windows/microsoft-edge-datos-de-exploraci%C3%B3n-y-privacidad-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd'>https://support.microsoft.com/es-es/windows/microsoft-edge-datos-de-exploraci%C3%B3n-y-privacidad-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd</a>
                </p>
                
            </Container>

            <Container maxWidth={"xl"} disableGutters={true}>
                <Footer />
            </Container>
        </>

    )
}

export default PoliticaCookies;