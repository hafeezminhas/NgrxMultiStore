const jwt = require('jsonwebtoken');

const users = [
  {
    firstname: 'Hafeez',
    lastname: 'Rehman',
    email: 'hafeez@gmail.com',
    password: 'TestPass',
    role: 1,
  }, {
    firstname: 'John',
    lastname: 'Doe',
    email: 'jdoe@outlook.com',
    password: 'TestPass',
    role: 2
  }
];

exports.login = (req, res) => {
  let { email, password } = req.body;
  let user = users.filter(u => u.email === email);

  if(!email || !password) {
    return res.boom.unauthorized('User does not exist');
  }

  user = { ...user[0] } || null;

  if(!user) {
    return res.boom.unauthorized('User does not exist');
  }

  if (user.password !== password) {
      return res.boom.unauthorized('Incorrect email or password provided').send()
  }

  const payload = { firstname: user.firstname, lastname: user.lastname, email: email, role: user.role, createdAt: new Date() };

  let token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: process.env.ACCESS_TOKEN_LIFE
  });

  let refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: process.env.REFRESH_TOKEN_LIFE
  });

  let result = { ...user, password: null };
  delete result.password;
  res.send({ user: result, refreshToken, token });
};
