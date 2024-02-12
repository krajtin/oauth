import { Container, Typography } from '@mui/material';
import React from 'react';
import Title from '../components/common/title/Title';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const AvisoLegal = ({ Component, pageProps }) => {

    return (
        <>
            <Container maxWidth={"xl"}>
                <Header />
            </Container>
            <Container maxWidth={"lg"} style={{paddingBottom: "2.5rem"}}>
                <Title text={'Aviso Legal'} />
                <Typography variant='paragraph' component={"p"}>Takumiers S.L., CIF B02825966, con dirección en Paseo de la Castellana, 194 - 28046 - Madrid. INFORMA: La utilización del nombre de dominio www.workerix.com se encuentra debidamente registrado por la empresa, con todas las garantías, tal y como dispone en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico. No obstante, se pone de manifiesto la plena adecuación de los presentes Términos Legales a la normativa vigente en materia de Protección de Datos, Comercio Electrónico, Condiciones Contratación, Propiedad Intelectual y demás disposiciones subsidiaria.</Typography>
                <Title className={"medium"} text={"ACEPTACIÓN DE LOS TÉRMINOS LEGALES"} />

                <Typography variant='paragraph' component={"p"}>El acceso a este sitio web o su utilización en cualquier forma implica la aceptación de todas y cada una de los presentes Términos Legales, reservándose la empresa el derecho a modificarlos en cualquier momento. En consecuencia, será responsabilidad de todo visitante y/o Usuario, la atenta lectura de los Términos Legales de uso vigente en cada una de las ocasiones en que acceda a este sitio web, por lo que, si éste no está de acuerdo con cualquiera de los mismos aquí dispuestos, deberá abstenerse respecto al uso de la presente página web.</Typography>
                <Title className={"medium"} text={"OBJETO"} />

                <Typography variant='paragraph' component={"p"}>Por medio de la web www.workerix.com, se facilita a los Usuarios el acceso a diversos contenidos, servicios, información y datos (los “contenidos”), puestos a su disposición. La empresa se reserva el derecho de modificar en cualquier momento la presentación, configuración y localización de la página web, así como los contenidos, productos y servicios en él dispuestos.</Typography>

                <Title className={"medium"} text={"CONDICIONES DE ACCESO"} />
                <Typography variant='paragraph' component={"p"}>El acceso a la información de los distintos productos y servicios existentes en el sitio web, así como a su navegación será libre y gratuita no exigiéndose por tanto a los Usuarios el pertinente registro con la consecuente entrega de sus datos personales, ni la utilización de claves o contraseñas. Cuando para el acceso a determinados contenidos o servicios sea necesario facilitar datos de carácter personal, los Usuarios garantizarán su veracidad, exactitud, autenticidad y vigencia. La empresa, dará a dichos datos el tratamiento automatizado que corresponda en función de su naturaleza o finalidad, en los términos indicados en la sección de Política de Protección de Datos.</Typography>

                <Title className={"medium"} text={"CONDICIONES DE UTILIZACIÓN"} />

                <Typography variant='paragraph' component={"p"}>El Usuario se compromete a hacer un uso adecuado y lícito del sitio web así como de los contenidos y servicios, de conformidad con la legislación aplicable en cada momento, los Términos Legales del sitio web, la moral y buenas costumbres generalmente aceptadas y el orden público. El Usuario deberá abstenerse de:</Typography>

                <ul>
                    <li>
                        <Typography variant='paragraph' component={"p"}>Hacer un uso no autorizado o fraudulento del sitio web y/o de los contenidos con fines o efectos ilícitos, prohibidos en los presentes Términos Legales, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los servicios o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático.</Typography>
                    </li>
                    <li>
                        <Typography variant='paragraph' component={"p"}>Acceder o intentar acceder a recursos o áreas restringidas del sitio web, sin cumplir las condiciones exigidas para dicho acceso.</Typography>
                    </li>
                    <li>
                        <Typography variant='paragraph' component={"p"}>Provocar daños en los sistemas físicos o lógicos del sitio web, de sus proveedores o de terceros.</Typography>
                    </li>
                    <li>
                        <Typography variant='paragraph' component={"p"}>Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar daños en los sistemas físicos o lógicos de la empresa, de sus proveedores o de terceros.</Typography>
                    </li>
                    <li>
                        <Typography variant='paragraph' component={"p"}>Intentar acceder, utilizar y/o manipular los datos de la empresa, terceros proveedores y otros Usuarios.</Typography>
                    </li>
                    <li>
                        <Typography variant='paragraph' component={"p"}>Reproducir o copiar, distribuir, permitir el acceso del público a través de cualquier modalidad de comunicación pública, transformar o modificar los contenidos, a menos que se cuente con la autorización expresa del titular de los correspondientes derechos o ello resulte legalmente permitido.</Typography>
                    </li>
                    <li>
                        <Typography variant='paragraph' component={"p"}>Suprimir, ocultar o manipular las notas sobre derechos de propiedad intelectual o industrial y demás datos identificativos de los derechos de la empresa o de terceros incorporados a los contenidos, así como los dispositivos técnicos de protección o cualesquiera mecanismos de información que puedan insertarse en los contenidos.</Typography>
                    </li>
                    <li>
                        <Typography variant='paragraph' component={"p"}>Intentar obtener datos personales distintos a los que está autorizado a conocer, empleando para ello medios o procedimientos ilícitos, fraudulentos o que puedan causar cualquier tipo de daño. (Véase Virus, troyanos, bugs, Worms, etc).</Typography>
                    </li>
                    <li>
                        <Typography variant='paragraph' component={"p"}>En particular, y a título meramente indicativo y no exhaustivo, el Usuario se compromete a no transmitir, difundir o poner a disposición de terceros informaciones, datos, contenidos, mensajes, gráficos, dibujos, archivos de sonido y/o imagen, fotografías, grabaciones, software y, en general, cualquier clase de material que:</Typography>
                        <ul style={{ paddingLeft: "3rem" }}>
                            <li>
                                <Typography variant='paragraph' component={"p"}>De cualquier forma sea contrario, menosprecie o atente contra los derechos fundamentales y las libertades públicas reconocidas constitucionalmente, en los Tratados Internacionales y en el resto de la legislación.</Typography>
                            </li>
                            <li>
                                <Typography variant='paragraph' component={"p"}>Induzca, incite o promueva actuaciones delictivas, denigratorias, difamatorias, violentas o, en general, contrarias a la ley, a la moral, a las buenas costumbres generalmente aceptadas o al orden público.</Typography>
                            </li>
                            <li>
                                <Typography variant='paragraph' component={"p"}>Induzca, incite o promueva actuaciones, actitudes o pensamientos discriminatorios por razón de sexo, raza, religión, creencias, edad o condición.</Typography>
                            </li>
                            <li>
                                <Typography variant='paragraph' component={"p"}>Incorpore, ponga a disposición o permita acceder a productos, elementos, mensajes y/o servicios delictivos, violentos, ofensivos, nocivos, degradantes o, en general, contrarios a la ley, a la moral y a las buenas costumbres generalmente aceptadas o al orden público.</Typography>
                            </li>
                            <li>
                                <Typography variant='paragraph' component={"p"}>Induzca o pueda inducir a un estado inaceptable de ansiedad o temor.</Typography>
                            </li>
                            <li>
                                <Typography variant='paragraph' component={"p"}>Induzca o incite a involucrarse en prácticas peligrosas, de riesgo o nocivas para la salud y el equilibrio psíquico.</Typography>
                            </li>
                            <li>
                                <Typography variant='paragraph' component={"p"}>Se encuentra protegido por la legislación en materia de protección intelectual o industrial perteneciente a la empresa o a terceros sin que haya sido autorizado el uso que se pretenda hacer.</Typography>
                            </li>
                            <li>
                                <Typography variant='paragraph' component={"p"}>Sea contrario al honor, a la intimidad personal y familiar o a la propia imagen de las personas.</Typography>
                            </li>
                            <li>
                                <Typography variant='paragraph' component={"p"}>Sea contrario al honor, a la intimidad personal y familiar o a la propia imagen de las personas.</Typography>
                            </li>
                            <li>
                                <Typography variant='paragraph' component={"p"}>Incluya cualquier tipo de virus o programa que impida el normal funcionamiento del sitio web.</Typography>
                            </li>

                        </ul>
                    </li>
                </ul>

                <Typography variant='paragraph' component={"p"}>Cuando para el acceso a determinados contenidos o servicios sea necesario facilitar datos de carácter personal, los Usuarios garantizarán su veracidad, exactitud, autenticidad y vigencia. La empresa, dará a dichos datos el tratamiento automatizado que corresponda en función de su naturaleza o finalidad, en los términos indicados en la sección de Política de Protección de Datos.</Typography>

                <Title className={"medium"} text={"RESPONSABILIDADES"} />
                <Typography variant='paragraph' component={"p"}>La empresa no garantiza el acceso continuado, ni la correcta visualización, descarga o utilidad de los elementos e informaciones contenidas en las páginas de la empresa, que pueden verse impedidos, dificultados o interrumpidos por factores o circunstancias que están fuera de su control.</Typography>
                <Typography variant='paragraph' component={"p"}>La empresa, podrá interrumpir el servicio o resolver de modo inmediato la relación con el Usuario si detecta un uso de su Portal o de cualquiera de los servicios ofertados en el mismo son contrarios a los presentes Términos Legales.La empresa, pone a disposición de los Usuarios una dirección de correo electrónico info@workerix.com para que cualquier contenido que pueda afectar a la actividad de otros usuarios sea puesto de manifiesto, con la voluntad de rectificar el mismo en caso de ser apropiado.La empresa, no se hace responsable por daños, perjuicios, pérdidas, reclamaciones o gastos, producidos por:</Typography>
                <ul>
                    <li>
                        <Typography variant='paragraph' component={"p"}>Interferencias, interrupciones, fallos, omisiones, averías telefónicas, retrasos, bloqueos o desconexiones en el funcionamiento del sistema electrónico, motivadas por deficiencias, sobrecargas y errores en las líneas y redes de telecomunicaciones, o por cualquier otra causa ajena al control de La empresa.</Typography>
                    </li>
                    <li>
                        <Typography variant='paragraph' component={"p"}>Intromisiones ilegítimas mediante el uso de programas malignos de cualquier tipo y a través de cualquier medio de comunicación, tales como virus informáticos o cualesquiera otros.</Typography>
                    </li>
                    <li>
                        <Typography variant='paragraph' component={"p"}>Abuso indebido o inadecuado de las páginas web de la empresa.</Typography>
                    </li>
                    <li>
                        <Typography variant='paragraph' component={"p"}>Errores de seguridad o navegación producidos por un mal funcionamiento del navegador o por el uso de versiones no actualizadas del mismo. Los administradores de la empresa se reservan el derecho de retirar, total o parcialmente, cualquier contenido o información presente en la web.</Typography>
                    </li>
                </ul>
                <Typography variant='paragraph' component={"p"}>La empresa, excluye cualquier responsabilidad por los daños y perjuicios de toda naturaleza que pudieran deberse a la mala utilización de los servicios de libre disposición y uso por parte de los usuarios de la Web. Asimismo, la empresa queda exonerada de cualquier responsabilidad por el contenido e informaciones que puedan ser recibidas como consecuencia de los formularios de recogida de datos, estando los mismos únicamente para la prestación de los servicios descritos ofertados por la empresa; Servicios tales como comercio online y solicitud de presupuestos. Por otro lado, en caso de causar daños y perjuicios por un uso ilícito o incorrecto de dichos servicios, el usuario podrá ser reclamado por la empresa por dichos daños o perjuicios causados.</Typography>

                <Title className={"medium"} text={"PROPIEDAD INTELECTUAL E INDUSTRIAL"} />
                <Typography variant='paragraph' component={"p"}>El Usuario reconoce y acepta que todas las marcas, nombres comerciales o signos distintivos, todos los derechos de propiedad industrial e intelectual, sobre los contenidos y/o cualesquiera otros elementos insertados en el página, son propiedad exclusiva de la empresa y/o de terceros, quienes tiene el derecho exclusivo de utilizarlos en el tráfico económico. En ningún caso el acceso a la página Web implica ningún tipo de renuncia, transmisión, licencia o cesión total ni parcial de dichos derechos, salvo que se establezca expresamente lo contrario. Los presentes Términos Legales de la página Web no confieren a los Usuarios ningún otro derecho de utilización, alteración, explotación, reproducción, distribución o comunicación pública de la página Web y/o de sus Contenidos distintos de los aquí expresamente previstos. Cualquier otro uso o explotación de cualesquiera derechos estará sujeto a la previa y expresa autorización específicamente otorgada a tal efecto por la empresa o el tercero titular de los derechos afectados.</Typography>
                <Typography variant='paragraph' component={"p"}>Los contenidos, textos, fotografías, diseños, logotipos, imágenes, programas de ordenador, códigos fuente y, en general, cualquier creación intelectual existente en este sitio, así como el propio sitio en su conjunto, como obra artística multimedia, están protegidos como derechos de autor por la legislación en materia de propiedad intelectual. La empresa es titular de los elementos que integran el diseño gráfico de su página web, lo menús, botones de navegación, el código HTML, los textos, imágenes, texturas, gráficos y cualquier otro contenido de la página Web o, en cualquier caso dispone de la correspondiente autorización para la utilización de dichos elementos. El contenido dispuesto en dicha web no podrá ser reproducido ni en todo ni en parte, ni transmitido, ni registrado por ningún sistema de recuperación de información, en ninguna forma ni en ningún medio, a menos que se cuente con la autorización previa, por escrito, de la citada Entidad.Así mismo queda prohibido suprimir, eludir o manipular el copyright y la empresa, así como los dispositivos técnicos de protección, o cualesquiera mecanismos de información que pudieren contener los contenidos. El Usuario de este sitio Web se compromete a respetar los derechos enunciados y a evitar cualquier actuación que pudiera perjudicarlos, reservándose en todo caso la empresa el ejercicio de cuantos medios o acciones legales le correspondan en defensa de sus legítimos derechos de propiedad intelectual e industrial.</Typography>

                <Title className={"medium"} text={"PROTECCIÓN DE DATOS"} />

                <Typography variant='paragraph' component={"p"}>Para utilizar algunos de los Servicios, los Usuarios deben proporcionar previamente ciertos datos de carácter personal. Para ello, la empresa tratará automatizadamente los Datos Personales en cumplimiento con el Reglamento General de Protección de Datos 2016/679 de 27 de abril de 2016, Para ello, el usuario puede acceder a la política seguida en el tratamiento de los datos personales (POLITICA PROTECCION DE DATOS) así como el establecimiento de las finalidades previamente establecidas, a lo dispuesto en las condiciones definidas en la Política de Protección de Datos que presenta el Web.</Typography>

                <Title className={"medium"} text={"DURACIÓN Y TERMINACIÓN"} />
                <Typography variant='paragraph' component={"p"}>La prestación del servicio del presente sitio Web y los demás servicios tienen en principio una duración indefinida. No obstante, la empresa, podrá dar por terminada o suspender cualquiera de los servicios del portal. Cuando sea ello posible, la empresa, anunciará la terminación o suspensión de la prestación del servicio determinado.</Typography>

                <Title className={"medium"} text={"FUERZA MAYOR"} />
                <Typography variant='paragraph' component={"p"}>La empresa, no será responsable en todo en caso de imposibilidad de prestar servicio, si ésta se debe a interrupciones prolongadas del suministro eléctrico, líneas de telecomunicaciones, conflictos sociales, huelgas, rebelión, explosiones, inundaciones, actos y omisiones del Gobierno, y en general todos los supuestos de fuerza mayor.</Typography>

                <Title className={"medium"} text={"COOKIES UTILIZADAS EN ESTE SITIO WEB"} />
                <Typography variant='paragraph' component={"p"}>Siguiendo las directrices de la Agencia Española de Protección de Datos podrá consultar nuestra política de cookies en la página política de cookies.</Typography>

                <Title className={"medium"} text={"LEY APLICABLE Y JURISDICCIÓN"} />
                <Typography variant='paragraph' component={"p"}>Los presentes Términos Legales se rigen por la Ley española. En la medida en que así lo permita la ley, las partes con renuncia expresa a cualquier otro fuero que pudiera corresponderles, acuerdan someterse a la jurisdicción de los Juzgados y Tribunales donde recae la razón social de la empresa.</Typography>


            </Container>

            <Container maxWidth={"xl"} disableGutters={true}>
                <Footer />
            </Container>
        </>

    )
}

export default AvisoLegal;