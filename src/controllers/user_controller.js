import User from '../models/user_model';

import jwt from 'jwt-simple';
import dotenv from 'dotenv';

dotenv.config({ silent: true });


// encodes a new token for a user object
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.AUTH_SECRET);
}

export const signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};

export const signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send('You must provide email and password');
  }
  // here you should do a mongo query to find if a user already exists with this email.
  // if user exists then return an error. If not, use the User model to create a new user.
  // Save the new User object
  // this is similar to how you created a Post
  // and then return a token same as you did in in signin
  // User.findOne({ 'email': email }).then((result) => {
  User.findOne({ email }).then((result) => {
    if (!result) {
      const user = new User({ email, password });

      return user.save();
    } else {
      return res.status(422).send('Email already in use');
    }
  })
    .then((user) => {
      res.send({ token: tokenForUser(user) });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
