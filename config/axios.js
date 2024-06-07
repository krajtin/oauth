/*===================================================================================
=   Fichero: axios.js                                                               =
=   Descripción: Librería utilizada para comunicar con el server. Con esta          =
=                configuración aseguramos que el token viaja              =
=   Fecha: Octubre 2020                                                             =
=   Dev: Ángel Blancas                                                              =
=   Versión: 1.0                                                                    =
=====================================================================================*/

import axios from 'axios';
const clienteAxios = axios.create({
  baseURL: "/"
});

clienteAxios.interceptors.request.use(function (config) {
  var token = localStorage.getItem('id_token')
  if (!token) { token = sessionStorage.getItem('id_token'); }
  
  config.headers = {
    'x-auth-token': token,
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default clienteAxios;