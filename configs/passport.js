const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      db = require('../models'),
      { Profiles } = db;


passport.use(new LocalStrategy((username, password, done) => {
    Profiles.findOne({ userName: username }, async (err, user) => {
          try {
            if(!user) {
                return done(null, false, { message: "Incorrect Username"});
            }

            if (!(await user.verifyPassword(password))) {
                return done(null, false, { message: "Incorrect password." });
            }
              return done(null, user);

        } catch {
            console.error(err);
        }
    })
}));


passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    Profiles.findById(id, (err, user) => {
      done(err, user);
    });
  });

  module.exports = passport;