const jwt = require('jsonwebtoken');
const User = require('../models/user');

const handleErrors = (err) => {
  const errors = { email: '', password: '' };

  if (err.message.includes('Incorrect email')) {
    errors.email = 'The email you entered is not valid';
  }
  if (err.message.includes('Incorrect password')) {
    errors.password = 'The password you entered is incorrect';
  }
  if (err.code === 11000) {
    if (err.keyPattern) {
      errors.userName = 'The username you entered is already in use!';
    } else errors.email = 'The email you entered is already registered!';
  }
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  });
};

const signupPost = async (req, res) => {
  const { email, password, userName, cpassword } = req.body;

  try {
    if (password !== cpassword)
      res
        .status(400)
        .json({ errors: { password: 'Passwords do not match!' } })
        .end();

    const user = await User.create({ email, password, userName });
    const token = createToken(user._id);
    res.cookie('urlshort', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
const loginPost = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user);
    res.cookie('urlshort', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const logoutGet = async (req, res) => {
  await res.cookie('urlshort', '', { maxAge: 1 });
  res.status(200).json({ user: null });
};

const verifyAuth = async (req, res) => {
  const token = req.cookies.urlshort;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.json({ user: null });
      } else {
        const user = await User.findOne({ _id: decodedToken.id });

        res.status(200).json({ user });
      }
    });
  } else {
    res.json({ user: null });
  }
};

module.exports = {
  verifyAuth,
  signupPost,
  loginPost,
  logoutGet
};
