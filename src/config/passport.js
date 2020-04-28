const passport = require('passport');

module.exports = function passportConfig(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  // stores user in session
  passport.serializeUser((user, done) => {
    // callback which takes an error and an object
    done(null, user);
  });

  // retrieves user from session
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  require('./strategies/local.strategy');
};
