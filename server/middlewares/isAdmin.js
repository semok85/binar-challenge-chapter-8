const jwt = require("jsonwebtoken");

function isAdmin(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    // if the token is not present, return an error message
    return res.redirect("/");
  } else {
    try {
      // verify the token and extract the payload
      const user = jwt.verify(token, process.env.JWT_SECRET);

      if (user) {
        next();
      }
    } catch (err) {
      // if there's an error verifying the token, clear the token from the user's cookie and redirect them to the login page
      res.clearCookie("token");
      return res.redirect("/");
    }
  }
}

module.exports = isAdmin;
