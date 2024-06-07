/*===================================================================================
=   Fichero: useError.jsx                                                          =
=   Hook: useError                                                                 =
=   Descripción: Hook para controlar los errores producidos desde el server.                  = 
=   Fecha: Agosto 2021                                                             =
=   Dev: Daniel Fernández                                                           =
=   Versión: 1.0                                                                    =
=====================================================================================*/
import { mostrarAlerta, mostrarAlertaImg } from "../components/common/Alerts";
import { imgcodefail, imginactive, imgfrozen, imggotcha, otherconnected } from '../components/common/Global';

const useError = () => {

    
    /**
     * Muestra un mensaje modal con la información del error
     * @param {Object} error Información del mensaje error, con texto y status
     */
    const errorIsComing = (error) => {
        let msg = '';
        if (error == undefined) {
            mostrarAlerta('error', false, "Aviso", "Esto es muy embarazoso...", 1000)
            return;
        }
        switch (error.status) {
            case 999: {/* El Error 999 se reserva para enviar un mensaje concreto desde el cliente */ }
                mostrarAlerta('warning', true, error.title, error.msg, 10000);
                return;
            case 400:
                if (error.data.msg == '' || error.data.msg == undefined) {
                    msg = "No puede realizarse la operación";
                }
                else {
                    msg = error.data.msg;
                }
                mostrarAlerta('warning', true, 'Upss...', msg, 10000);
                return;
            case 401:
                if (error.data.msg == '' || error.data.msg == undefined) {
                    mostrarAlerta('warning', true, 'Upss...', "Lo siento, no tienes autorización", 10000);
                }
                else if (error.data.msg == 'INACTIVE') {
                    mostrarAlertaImg(imginactive, true, 'Upss...', "Tu cuenta ha sido desactivada, por favor contacta con tu administrador", 10000);
                }
                else if (error.data.msg == 'FROZEN') {
                    mostrarAlertaImg(imgfrozen, true, 'Upss...', "Tu cuenta ha sido desactivada por motivos de seguridad durante una hora, por favor contacta con tu administrador", 10000);
                }
                else if (error.data.msg == 'CODEFAIL') {
                    mostrarAlertaImg(imgcodefail, true, 'Upss...', "El código es erróneo o ha expirado", 10000);
                }
                else if (error.data.msg == 'CODEEXPIRED') {
                    mostrarAlertaImg(imgcodefail, true, 'Upss...', "El código es erróneo o ha expirado", 10000);
                }
                else if (error.data.msg == 'GOTCHA') {
                    mostrarAlertaImg(imggotcha, true, 'Upss...', "Actividad sospechosa reportada", 10000);
                }
                else if (error.data.msg == 'OTHERCONNECTED') {
                    mostrarAlertaImg(otherconnected, true, 'Upss...', "Alguien ha abierto una sesión con esta cuenta. Si no has sido tú te recomendamos cambiar la contraseña", 10000);
                }
                else if (error.data.msg == 'CODELOGINFAIL') {
                    mostrarAlertaImg('warning', true, 'Upss...', "Usuario o contraseña erróneos. Recuerda que tienes un límite de 3 intentos", 10000);

                }
                else {
                    mostrarAlerta('warning', true, 'Upss...', error.data.msg, 10000);
                }
                return;
            case 403:
                if (error.data.msg == '' || error.data.msg == undefined) {
                    msg = "Lo siento, no tienes permisos";
                }
                else {
                    msg = error.data.msg;
                }
                mostrarAlerta('warning', true, 'Upss...', msg, 10000);
                return;
            case 404:
                if (error.data.msg == '' || error.data.msg == undefined) {
                    msg = "Lo siento, no encuentro la información";
                }
                else {
                    msg = error.data.msg;
                }
                mostrarAlerta('warning', true, 'Upss...', msg, 10000);
                return;
            case 406:
                if (error.data.msg == '' || error.data.msg == undefined) {
                    msg = "Lo siento, no encuentro la información";
                }
                else {
                    msg = error.data.msg;
                }
                mostrarAlerta('warning', true, 'Upss...', msg, 10000);
                return;
            case 418: {/* El Error 418 se reserva para enviar un mensaje desde el Servidor*/ }
                mostrarAlerta('info', true, 'Info', error.data.msg, 10000);
                return;
            case 500:
                if (error.data.msg == '' || error.data.msg == undefined) {
                    msg = "Se ha perdido la comunicación con el servidor";
                }
                else {
                    msg = error.data.msg;
                }
                mostrarAlerta('warning', true, 'Upss...', msg, 10000);
                return;
            default:
                mostrarAlerta('error', true, 'Error', "Servidores en mantenimiento, espere unos minutos ...", 10000);
                return;
        }
    }
    return { errorIsComing };
}
export default useError;
