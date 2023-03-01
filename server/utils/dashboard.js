class Dashboard {
  constructor(players) {
    this.players = players;
  }
  getHighestExperiencePlayer() {
    let highestExperiencePlayer = this.players[0];
    for (let i = 1; i < this.players.length; i++) {
      if (this.players[i].experience > highestExperiencePlayer.experience) {
        highestExperiencePlayer = this.players[i];
      }
    }
    return highestExperiencePlayer;
  }
  getHighestLevelPlayer() {
    let highestLevelPlayer = this.players[0];
    for (let i = 1; i < this.players.length; i++) {
      if (this.players[i].lvl > highestLevelPlayer.lvl) {
        highestLevelPlayer = this.players[i];
      }
    }
    return highestLevelPlayer;
  }

  calPercentageOfNewPlayers() {
    // get the date of the last day of the previous month
    const today = new Date();
    const lastDayOfPreviousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    );

    // filter players created before the last day of the previous month
    const filteredData = this.players.filter(
      (player) => new Date(player.createdAt) <= lastDayOfPreviousMonth
    );

    // calculate percentage of new players based on the filtered data
    const totalPlayers = this.players.length;
    const totalNewPlayers = filteredData.length;
    const percentage = (totalNewPlayers / totalPlayers) * 100;
    return percentage;
  }
}

module.exports = Dashboard;
