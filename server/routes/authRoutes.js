/* AUTH ROUTES  */

// DEPENDENCIES
const passport = require('passport');

// Export the function from a file
module.exports = app => {
	// 1. GOOGLE AUTH ROUTES [facebook, twitter use the same schema]
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email'],
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	// Logout
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});

	// 2. Looking for a user
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
		// res.send(req.session);
	});
};
