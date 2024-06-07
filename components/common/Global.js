/*===================================================================================
=   Fichero: global.js                                                              =
=   Descripción: Definición de elementos o variables comunes al idioma              =
=   Fecha: Febrero 2022                                                             =
=   Dev: Ángel Blancas                                                              =
=   Versión: 1.0                                                                    =
=====================================================================================*/

module.exports = {
	lang: 0,											// Idioma por defecto para usuarios no logados (por ejemplo fallo en Login)
	loginvideo: '/static/video/loginvideo.mp4',
	imginactive: '/static/img/seeyousoon.png',			// Icono a mostrar en mensaje cuenta inactiva
	imgfrozen: '/static/img/cofeebreak.png',			// Icono a mostrar en mensaje cuenta congelada
	imgcodefail: '/static/img/wakeup.png',				// Icono a mostrar en mensaje fallo en código de recuperación de cuenta
	imggotcha: '/static/img/gotcha.png',				// Icono a mostrar en mensaje te pillé haciendo algo poco legal
	otherconnected: '/static/img/otherconnected.png',
	serverok: '/static/img/loveit.png',
	emptylist: '/static/img/emptylist.png',
	changepass: '/static/img/exa3.gif',					// Grafico que aparece en el cambio de contraseña de un usario desde el admon
	FORMATDATE: 'DD-MM-YYYY',
	FORMATDATE_CSV_V1: 'DD/MM/YYYY',
	FORMATDATE_CSV_V2: 'DD/M/YYYY',
	HOURDATE: 'HH:mm:ss',
	SERVER_FORMATDATE: 'YYYY-MM-DDTHH:mm:ss.000Z',
	SAVE_FORMATDATE: ['DD-MM-YYYYTHH:mm:ssZ', 'DD-MM-YYYYTHH:mm:ssZ'],
	FORMAT_DECIMAL: [",", "."],
	TYPE_TOOLS: {
		NOTIFICATIONS: 1,
		CHAT: 2
	},
	TYPE_OAUTH: {
		NOONE: {
			name: "Ninguno",
			value: 0
		},
		GMAIL: {
			name: "Gmail",
			value: 1
		},
		MICROSOFT: {
			name: "Microsoft",
			value: 2
		},
		AZURE: {
			name: "Azure",
			value: 3
		},
	},
	//Licencias Org
	LICENSE: {
		BASIC: "Basic",
		ADVANCED: "Advanced",
		PREMIUM: "Premium"
	},
	ROLES: {
		ROOT: 1,
		ADMIN: 2,
		USER: 3
	},
	PAGES_NAME: {
		CLIENTS: 0,
		USERS: 1,
		REPORTS: 2,
		INCIDENTS: 3,
		TERMINALS: 4,
		MODELS: 5,
		ACCESORIES: 6,
	},
	PAGES_NAME_PUBLIC: {
		WELCOME: 1,
		CENTRAL: 2,
		INCIDENCE: 3,
		PROCESS_BUY: 4,
		TERMINAL: 5,
		PERSONAL_DATA: 6,
		BILLING_DATA: 7,
	},
	OPTION_BUTTON_PROCESS: {
		CHOOSE_CORP: 1,
		BUY_TERMINAL: 2,
		BUY_CORP: 3
	},
	PAGE_ACTIONS: {
		ADD: 0,
		EDIT: 1,
		LIST: 2,
		CSV: 3,
		CSV2: 4
	},
	//Estado de compra
	PURCHASE_STATUS: {
		ALL: -1, //Usado solo para la búsqueda
		PENDING: 0,
		BOUGHT: 1
	},
	//Estado de compra
	TERMINAL_STATUS_ADMIN: {
		PENDING: {
			name: "Pendiente",
			value: 0
		},
		ACCEPTED: {
			name: "Aprobado",
			value: 1
		},
		DENIED: {
			name: "Rechazado",
			value: 2
		},
	},

	//Estado de la incidencia
	INCIDENCE_STATUS: {
		NOT_RESOLVED: 0,
		RESOLVED: 1,
		DENIED: 2,
	},
	REPORTS_FILTER: {
		TERMINAL_PENDING: 0,
		TERMINAL_BOUGHT: 1,
		BILL_TAKUMIERS: 2,
		CSI_TAKUMIERS: 3,
	},
	HOSTNAME: process.env.HOST,
	ACCIDENT_AMOUNT_NO_IVA: 50.00,

	MAX_SIZE_IMG: 3.5, //En mb
	MAX_SIZE_PDF: 10, //En mb
	MAX_SIZE_VIDEO: 40, //En mb
	FORMAT_FILE: ["png", "jpg", "jpeg", "pdf", "mp4"],
	TYPE_FILE: {
		EXTERNA: {
			name: ["Externa", "External"],
			value: 0
		},
		IMAGEN: {
			name: ["Imagen", "Image"],
			value: 1
		},
		VIDEO: {
			name: ["Vídeo", "Video"],
			value: 2
		},
		PDF: {
			name: ["PDF", "PDF", "PDF"],
			value: 3
		}

	},
	PROVINCES: [
		"Álava",
		"Albacete",
		"Alicante",
		"Almería",
		"Asturias",
		"Ávila",
		"Badajoz",
		"Barcelona",
		"Burgos",
		"Cáceres",
		"Cádiz",
		"Cantabria",
		"Castellón",
		"Ciudad Real",
		"Córdoba",
		"Cuenca",
		"Gerona",
		"Granada",
		"Guadalajara",
		"Guipúzcoa",
		"Huelva",
		"Huesca",
		"Islas Baleares",
		"Jaén",
		"La Coruña",
		"La Rioja",
		"Las Palmas",
		"León",
		"Lérida",
		"Lugo",
		"Madrid",
		"Málaga",
		"Murcia",
		"Navarra",
		"Orense",
		"Palencia",
		"Pontevedra",
		"Salamanca",
		"Santa Cruz de Tenerife",
		"Segovia",
		"Sevilla",
		"Soria",
		"Tarragona",
		"Teruel",
		"Toledo",
		"Valencia",
		"Valladolid",
		"Vizcaya",
		"Zamora",
		"Zaragoza"
	],

	NUM_PROJECT: "220010032",
	MAX_LENGTH_FIELDS: {
		GENERAL: 75,
		TEXTAREA: 1200,
		SEARCH: 150,
		IMEI: 15
	},

}

