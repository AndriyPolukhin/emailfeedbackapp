/* MAIN CONFIG FOR PASSPORT */

// DEPENDENCIES
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// Create serialize and deserialize functions
passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

// PASSPORT SET UP
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true,
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					// we already have a record with this profile id
					done(null, existingUser);
				} else {
					// we don't have a record, make a new one
					new User({
						googleId: profile.id,
					})
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);
