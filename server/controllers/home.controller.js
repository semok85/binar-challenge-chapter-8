const { Admin } = require("../models");
const { hashPassword, verifyPassword } = require("../utils/passwordHandler");
const jwt = require("jsonwebtoken");

async function home(req, res) {
  res.render("home");
}

async function loginAdmin(req, res) {
  const { username, password } = req.body;
  try {
    // check if user found
    const user = await Admin.findOne({
      where: { username: username },
    });
    if (!user) {
      req.flash("error", "Invalid username or password");
      res.locals.messages = req.flash();
      return res.render("home");
    }

    // Check if password is correct
    const isPasswordCorrect = await verifyPassword(password, user.password);
    if (!isPasswordCorrect) {
      req.flash("error", "Wrong Password");
      res.locals.messages = req.flash();
      return res.render("home");
    }

    // create payload for jwt
    const payload = {
      username: user.username,
    };
    // options for jwt
    const options = { expiresIn: "1d" };
    const secretkey = process.env.JWT_SECRET;
    // sign jwt
    const token = jwt.sign(payload, secretkey, options);

    res.cookie("token", token, { httpOnly: true, secure: true });

    // res.locals.messages = req.flash();
    return res.redirect("/dashboard");
  } catch (error) {
    req.flash("error", error.messages);
    res.locals.messages = req.flash();
    return res.render("home");
  }
}

async function registerAdmin(req, res) {
  try {
    const { username, password } = req.body;
    console.log(username);
    const user = await Admin.create({
      username,
      password: await hashPassword(password),
    });
    if (user) {
      req.flash("success", "User Admin has created, please log in");
      res.locals.messages = req.flash();
      return res.render("home");
    }
  } catch (error) {
    return res.status(401).json({ error });
  }
}

module.exports = { home, loginAdmin, registerAdmin };
