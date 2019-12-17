const fs = require("fs-extra");

const dataFilePath = __dirname + "/data.json";

let games = {};

const ReadGamesFromFile = async () => {
  const exists = await fs.exists(dataFilePath);
  if (exists) {
    try {
      const raw = await fs.readFile(dataFilePath);
      const data = await JSON.parse(raw);
      games = data;
    } catch (error) {
      console.log("Not able to read data file ", error);
    }
  } else {
    try {
      const initialGames = require("./initialData");
      const json = await JSON.stringify(initialGames, null, 2);

      await fs.writeFile(dataFilePath, json, { encoding: "utf8" });

      games = initialGames;
    } catch (error) {
      console.log("Not able to write data to file ", error);
    }
  }
};

const WriteGamesToFile = async games => {
  try {
    const json = await JSON.stringify(games, null, 2);

    await fs.writeFile(dataFilePath, json, { encoding: "utf8" });

    games = games;
  } catch (error) {
    console.log("Not able to write data to file ", error);
  }
};

ReadGamesFromFile();

module.exports.getGames = () => games;
module.exports.updateGames = games => WriteGamesToFile(games);
