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
const cookieParser = require('cookie-parser');
//  https://hackernoon.com/enforcing-a-single-web-socket-connection-per-user-with-node-js-socket-io-and-redis-65f9eb57f66a
//  https://platzi.com/blog/usando-socketio-en-aplicaciones-de-nextjs/


const PORT = process.env.PORT || 9090;
console.log('RUNNING FROM= ', process.env.NODE_ENV)
// Verificación de si corre en producción o en desarrollo
const dev = process.env.NODE_ENV !== 'production'
// Iniciamos app de Next.js
const nextApp = next({ dir: ".", dev })

// Obtenemos el manejador de next
const handle = nextApp.getRequestHandler();
var allowCrossDomain = function (req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authrorization, X-Requested-With',);
	next();
}

nextApp
	.prepare()
	.then(() => {
		app.set('view engine', 'html');
		app.use(express.json({ limit: '100mb', extended: true }));
		app.use(express.urlencoded({ extended: true }));
		app.use(cors());
		app.use(allowCrossDomain);
		app.use(cookieParser());
		app.get('/sign', (req, res) => {
			const data = {
				type: "GET",
				query: JSON.stringify(req.query),
				cookies: JSON.stringify(req.cookies),
				headers: JSON.stringify(req.headers),
				body: JSON.stringify(req.body),
				params: JSON.stringify(req.params),
				url: JSON.stringify(req.url),
				originalUrl: JSON.stringify(req.originalUrl),
				baseUrl: JSON.stringify(req.baseUrl),
				path: JSON.stringify(req.path),
				hostName: JSON.stringify(req.hostname),
			}
			res.send(data)	
		});
		app.post('/sign', (req, res) => {
			const data = {
				type: "POST",
				query: JSON.stringify(req.query),
				cookies: JSON.stringify(req.cookies),
				headers: JSON.stringify(req.headers),
				body: JSON.stringify(req.body),
				params: JSON.stringify(req.params),
				url: JSON.stringify(req.url),
				originalUrl: JSON.stringify(req.originalUrl),
				baseUrl: JSON.stringify(req.baseUrl),
				path: JSON.stringify(req.path),
				hostName: JSON.stringify(req.hostname),
			}
			res.send(data)	
		});
		app.get('/relay', (req, res) => {
			const data = {
				type: "GET",
				query: JSON.stringify(req.query),
				cookies: JSON.stringify(req.cookies),
				headers: JSON.stringify(req.headers),
				body: JSON.stringify(req.body),
				params: JSON.stringify(req.params),
				url: JSON.stringify(req.url),
				originalUrl: JSON.stringify(req.originalUrl),
				baseUrl: JSON.stringify(req.baseUrl),
				path: JSON.stringify(req.path),
				hostName: JSON.stringify(req.hostname),
			}
			res.send(data)	
		});
		app.post('/relay', (req, res) => {
			
			res.send(JSON.stringify(req))	
		});
		app.post('/reply', (req, res) => {
			const data = {
				type: "POST",
				query: JSON.stringify(req.query),
				cookies: JSON.stringify(req.cookies),
				headers: JSON.stringify(req.headers),
				body: JSON.stringify(req.body),
				params: JSON.stringify(req.params),
				url: JSON.stringify(req.url),
				originalUrl: JSON.stringify(req.originalUrl),
				baseUrl: JSON.stringify(req.baseUrl),
				path: JSON.stringify(req.path),
				hostName: JSON.stringify(req.hostname),
			}
			res.send(data)	
		});
		app.get('/reply', (req, res) => {
			const data = {
				type: "POST",
				query: JSON.stringify(req.query),
				cookies: JSON.stringify(req.cookies),
				headers: JSON.stringify(req.headers),
				body: JSON.stringify(req.body),
				params: JSON.stringify(req.params),
				url: JSON.stringify(req.url),
				originalUrl: JSON.stringify(req.originalUrl),
				baseUrl: JSON.stringify(req.baseUrl),
				path: JSON.stringify(req.path),
				hostName: JSON.stringify(req.hostname),
			}
			res.send(data)	
		});
		app.get('/logout', (req, res) => {
			const data = {
				type: "GET",
				query: JSON.stringify(req.query),
				cookies: JSON.stringify(req.cookies),
				headers: JSON.stringify(req.headers),
				body: JSON.stringify(req.body),
				params: JSON.stringify(req.params),
				url: JSON.stringify(req.url),
				originalUrl: JSON.stringify(req.originalUrl),
				baseUrl: JSON.stringify(req.baseUrl),
				path: JSON.stringify(req.path),
				hostName: JSON.stringify(req.hostname),
			}
			res.send(data)	
		});
		app.post('/logout', (req, res) => {
			const data = {
				type: "POST",
				query: JSON.stringify(req.query),
				cookies: JSON.stringify(req.cookies),
				headers: JSON.stringify(req.headers),
				body: JSON.stringify(req.body),
				params: JSON.stringify(req.params),
				url: JSON.stringify(req.url),
				originalUrl: JSON.stringify(req.originalUrl),
				baseUrl: JSON.stringify(req.baseUrl),
				path: JSON.stringify(req.path),
				hostName: JSON.stringify(req.hostname),
			}
			res.send(data)	
		});
		/*app.use(passport.initialize());
		
		//app.use(cors());
		configurePassportGoogle(HOSTNAME, PORT);
		app.get('/auth/google',
			passport.authenticate('google', { scope: ['profile', 'email'] })
		);

		app.get('/auth/google/callback',
			passport.authenticate('google', { failureRedirect: '/' }),
			function (req, res) {
				// Autenticación exitosa, redirige o responde como desees
				res.redirect('/user-profile');
			});
			*/

		// Verbos
		app.get("/", (req ,res) => {
            res.send("INDEX");
        })
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

