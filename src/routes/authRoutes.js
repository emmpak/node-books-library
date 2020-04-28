const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:authRoutes');

const authRouter = express.Router();

function router() {
  authRouter.route('/signUp')
    .post((req, res) => {
      debug(req.body);
      // passport initializes the login method
      // passport serializes user in session, redirects & deserialize it
      req.login((req.body), () => {
        res.redirect('/auth/profile');
      });
    });
  authRouter.route('/profile')
    .get((req, res) => {
      // user in session deserialized
      res.json(req.user);
    });
  return authRouter;
}

module.exports = router;
