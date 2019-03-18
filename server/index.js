/* MAIN SERVER FILE */

// DEPENDENCIES
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
// APP
const app = express();

// PASSPORT SET UP
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
		},
		(accessToken, refreshToken, profile, done) => {
			console.log('accessToken:', accessToken);
			console.log('refreshToken:', refreshToken);
			console.log('profile', profile);
		}
	)
);

app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

app.get('/auth/google/callback', passport.authenticate('google'));

// Server initiate
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server is running on port 5000'));