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
                <Title text={'Política de protección de datos'} />
                <Title className={"medium"} text={"RESPONSABLE"} />
                <Typography variant='paragraph' component={"p"}>Takumiers S.L., CIF B02825966, con dirección en Paseo de la Castellana, 194 - 28046 - Madrid. Usted podrá contactar con el responsable mediante el siguiente Email: info@workerix.com</Typography>
                <Title className={"medium"} text={"FINALIDAD"} />

                <Typography variant='paragraph' component={"p"}>Descripción ampliada de los fines del tratamiento: Publicidad y prospección comercial. Gestión de solicitudes.Plazos o criterios de conservación de los datos: Conservaremos los datos durante el tiempo que sea necesario para atender la solicitud y cumplir con las obligaciones legales exigidas. Los datos que usted nos ha facilitado serán conservados mientras sean necesarios para las finalidades indicadas en el punto anterior, o también serán almacenadas por el tiempo exigido por distintas legislaciones aplicables.Decisiones automatizadas, perfiles y lógica aplicada: Los datos recogidos mediante la página web no serán utilizados para tomar decisiones automatizadas.</Typography>
                <Title className={"medium"} text={"LEGITIMACIÓN"} />

                <Typography variant='paragraph' component={"p"}>Legislación aplicable: La legislación aplicada es el Reglamento General de Protección de Datos 2016/679 de 27 de abril de 2016 así como la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.Detalles de la base jurídica del tratamiento, en los casos de obligación legal, interés público o interés público o interés legítimo: Art. 6, apartado 1 letra a. Que considera el consentimiento del interesado como una base legítima para el tratamiento de datos personales contenidos en este fichero.Obligación o no de facilitar datos y consecuencias de no hacerlo: No está obligado a facilitarnos los datos, sin embargo, será necesario para poder gestionar las sugerencias o peticiones que necesite hacernos mediante la página web.</Typography>

                <Title className={"medium"} text={"DESTINATARIOS"} />
                <Typography variant='paragraph' component={"p"}>Destinatarios: Organizaciones o personas directamente relacionadas con la empresa, Administración pública con competencia en la materia.</Typography>
                <Typography variant='paragraph' component={"p"}>Destinatarios específicos: No existen.</Typography>
                <Typography variant='paragraph' component={"p"}>Decisiones de adecuación, garantías, normas corporativas vinculantes o situaciones específicas aplicables: No existen.Transferencias internacionales: No existen.</Typography>
                <Typography variant='paragraph' component={"p"}>Transferencias internacionales: No existen.</Typography>

                <Title className={"medium"} text={"DERECHOS"} />

                <Typography variant='paragraph' component={"p"}>Derechos de acceso, rectificación, supresión y portabilidad de sus datos, y la limitación u oposición a su tratamiento: El interesado podrá conocer, modificar, o eliminar los datos que la empresa posea acerca de su persona mediante correo electrónico facilitando su DNI o bien por correo postal a Paseo de la Castellana, 194 - 28046 - Madrid. El interesado podrá transferir sus datos a otra entidad o bien limitar los ya existentes que la empresa posea acerca de su persona mediante correo electrónico facilitando su DNI o bien por correo postal a Paseo de la Castellana, 194 - 28046 - Madrid.Derecho a retirar el Consentimiento prestado: El interesado podrá retirar los datos que la empresa posee acerca de su persona mediante correo electrónico facilitando su DNI o bien por correo postal a Paseo de la Castellana, 194 - 28046 - Madrid.Derecho a reclamar ante la Autoridad de Control: El interesado podrá reclamar ante la Agencia Española de Protección de Datos acerca de toda incidencia que pueda surgirle.</Typography>

                <Title className={"medium"} text={"PROCEDENCIA"} />

                <Typography variant='paragraph' component={"p"}>Información detallada del origen de los datos: Facilitados por el propio interesado.</Typography>
                <Typography variant='paragraph' component={"p"}>Categorías de datos que se tratan: Nombre y Apellidos Email, Teléfono.</Typography>
            </Container>

            <Container maxWidth={"xl"} disableGutters={true}>
                <Footer />
            </Container>
        </>

    )
}

export default PoliticaCookies;