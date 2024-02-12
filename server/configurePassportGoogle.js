const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");

function configurePassportGoogle(HOST, PORT) {
    passport.use(new GoogleStrategy({
        clientID: "255364357332-4cahtu09hrgvvtbiodcs8ug95fc9iptj.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: `${HOST}:${PORT}/auth/google/callback`
    },
    function (accessToken, refreshToken, profile, cb) {
        console.log("CORRECTO");
        // Aquí puedes hacer lo que necesites con el perfil del usuario
        // Por ejemplo, guardar en la base de datos, llamar a una función de autorización, etc.
    }));
}

module.exports = configurePassportGoogle