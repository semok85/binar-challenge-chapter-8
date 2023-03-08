const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware function to check JWT token
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(401)
      .json({ status: "Failed", message: "Authorization header is missing" });
  }

  // Parse the token from the Authorization header
  const [authType, token] = authHeader.split(" ");
  if (authType !== "Bearer" || !token) {
    return res.status(401).json({
      status: "Failed",
      message: "Invalid authorization header format",
    });
  }

  try {
    // Verify the token using the secret key
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken.userId + "#######");
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ status: "Error", message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
