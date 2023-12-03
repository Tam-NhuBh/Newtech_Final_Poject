const passport = require('passport');
const jwt = require('jsonwebtoken');
module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

app.get('/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    // Check if user is authenticated
    if (req.isAuthenticated()) {
      // Send user data back as JSON
      const userData = req.user; // Assuming user data is available in req.user

      // Create a JWT token and send it to the client
      const token = jwt.sign({ user: userData }, 'tnhubh');
    
      // You can also store this token in a secure HTTP-only cookie if needed
      res.cookie('authToken', token, { domain: 'localhost', path: '/', httpOnly: false });


      redirectUrl = "http://localhost:3000/app"
      res.redirect(redirectUrl);
    } else {
      // Handle authentication failure
      res.json({ error: 'Authentication failed' });
    }
  }
);

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};