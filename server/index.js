// ESTRUCTURA BASE DE ARRANQUE DEL PROYECTO

// Cargamos la base de datos y acceso a ficheros
require('dotenv').config({ path: 'variables.env' });
const passport = require("passport");
const configurePassportGoogle = require("./configurePassportGoogle")

// ======== New
// Cargamos express e iniciamos la aplicación
const express = require('express');
const app = require('express')()
// Creamos servidor HTTP desde la aplicación express
const server = require('http').Server(app)
// Cargamos next
const next = require('next');

// Para cross domain
const cors = require('cors');

//  https://hackernoon.com/enforcing-a-single-web-socket-connection-per-user-with-node-js-socket-io-and-redis-65f9eb57f66a
//  https://platzi.com/blog/usando-socketio-en-aplicaciones-de-nextjs/


const PORT = process.env.PORT || 3000;
console.log('RUNNING FROM= ', process.env.NODE_ENV)
// Verificación de si corre en producción o en desarrollo
const dev = process.env.NODE_ENV !== 'production'
// Iniciamos app de Next.js
const nextApp = next({ dir: ".", dev })

// Obtenemos el manejador de next
const handle = nextApp.getRequestHandler()
const HOSTNAME = "http://localhost"
nextApp
	.prepare()
	.then(() => {
		app.set('view engine', 'html');
		app.use(express.json({ limit: '10mb', extended: true }));
		//app.use(cors());
		configurePassportGoogle(HOSTNAME, PORT);
		app.get('/auth/google',
			passport.authenticate('google', { scope: ['profile'] }));

		app.get('/auth/google/callback',
			passport.authenticate('google', { failureRedirect: '/login' }),
			function (req, res) {
				// Successful authentication, redirect home.
				res.redirect('/');
			});
		// Verbos
		app.get('*', (req, res) => {
			return handle(req, res);
		});
		app.post('*', (req, res) => {
			return handle(req, res);
		});
		app.delete('*', (req, res) => {
			return handle(req, res);
		});
		app.put('*', (req, res) => {
			return handle(req, res);
		});
		app.all('*', (req, res) => {
			return handle(req, res)
		})

		server.listen(PORT, (err) => {
			if (err) throw err
			console.log(`> Ready on http://localhost:${PORT}`)
		})
	})

