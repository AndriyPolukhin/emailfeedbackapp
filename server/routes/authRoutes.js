/* AUTH ROUTES  */

// DEPENDENCIES
const passport = require('passport');

// Export the function from a file
module.exports = app => {
	// 1. GOOGLE AUTH ROUTES
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email'],
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));
};
