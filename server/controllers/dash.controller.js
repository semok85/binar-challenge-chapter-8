const { Player } = require("../models");
const jwt = require("jsonwebtoken");
const { hashPassword } = require("../utils/passwordHandler");

const dash = require("../utils/dashboard");

async function dashboard(req, res) {
  try {
    const token = req.cookies.token;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    const players = await Player.findAll({});
    const dataDashboard = new dash(players);
    res.render("dashboard", {
      username: user.username,
      players: players,
      topExperiencePlayer: dataDashboard.getHighestExperiencePlayer(),
      topLevelPlayer: dataDashboard.getHighestLevelPlayer(),
      percentagePlayerGain: dataDashboard.calPercentageOfNewPlayers(),
    });
  } catch (error) {
    res.send(error.message);
  }
}

async function editPlayer(req, res) {
  try {
    const { username, email, password } = req.body;
    const id = req.params.id;
    const player = await Player.findByPk(id);
    await Player.update(
      {
        username: username || player.username,
        password: password ? await hashPassword(password) : player.password,
        email: email || player.email,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.redirect("/dashboard");
  } catch (error) {
    res.send(error.message);
  }
}

async function delPlayer(req, res) {
  try {
    const id = req.params.id;
    await Player.destroy({
      where: {
        id: id,
      },
    });
    return res.redirect("/dashboard");
  } catch (error) {
    res.send(error.message);
  }
}

function logout(req, res) {
  try {
    //clear the token key
    res.clearCookie("token");
    //redirect to home page
    return res.redirect("/");
  } catch (err) {
    //if an error occurs, handle it and return a 500 status code
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
}

module.exports = { dashboard, delPlayer, logout, editPlayer };
