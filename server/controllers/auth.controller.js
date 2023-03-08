const jwt = require("jsonwebtoken");
const { Player } = require("../models");
require("dotenv").config();
const { verifyPassword } = require("../utils/passwordHandler");

// Function to handle user login
const playerLogin = async (req, res) => {
  const { username, password } = req.body; // get username and password data from req.body

  try {
    // Check if user exists in the database
    const user = await Player.findOne({
      where: {
        username: username,
      },
    });
    if (!user) {
      return res
        .status(401)
        .json({ status: "Failed", message: "Invalid username or password" });
    }

    // Check if password is correct
    const isPasswordCorrect = verifyPassword(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ status: "Failed", message: "Invalid password" });
    }

    // Generate a JWT token and return it as response
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log(user.id + "---------");
    return res.status(200).json({ token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Error", message: "Server error" });
  }
};

module.exports = { playerLogin };
