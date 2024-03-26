// index.js
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");

/**
 * @typedef {Object} User
 * @property {string} username
 * @property {string} password
 */

const SECRET_KEY = "sdfjiosdjoio233o";
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(bodyParser.json());

/**
 *
 * @type {{users: User[]}}
 */
const db = {
  users: [],
};

// Register route
/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.sendStatus(400);
  }

  db.users.push({ username, password });
  res.sendStatus(201);
});

function verifyToken(req, res, next) {
  const token = req.cookies.jwt;

  console.log(req.cookies);

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    req.user = jwt.verify(token, SECRET_KEY); // Attach the decoded user information to the request
    next();
  } catch (err) {
    res.sendStatus(400);
  }
}

// Login route
/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = db.users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.sendStatus(401);
  }

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
  res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 });
  // 1 hour expiration
  res.send(200);
});

// Logout route (clear JWT)
/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
app.post("/logout", (req, res) => {
  res.clearCookie("jwt", { path: "/", httpOnly: true });
});

app.get("/verify-token", verifyToken, (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
