const { Player } = require("../models");

const dash = require("../utils/dashboard");

async function dashboard(req, res) {
  try {
    const players = await Player.findAll({});
    const dataDashboard = new dash(players);
    res.render("dashboard", {
      players: players,
      topExperiencePlayer: dataDashboard.getHighestExperiencePlayer(),
      topLevelPlayer: dataDashboard.getHighestLevelPlayer(),
      percentagePlayerGain: dataDashboard.calPercentageOfNewPlayers(),
    });
  } catch (error) {
    res.send(error.message);
  }
}

async function delPlayer(req, res) {
  try {
    const { id } = req.body;
    await Player.destroy({
      where: {
        id: id,
      },
    });
    return res.redirect("dashboard");
  } catch (error) {
    res.send(error.message);
  }
}
module.exports = { dashboard, delPlayer };
