const express = require("express");
const app = express();
const morgan = require("morgan");
const compression = require("compression");
const path = require("path");
var favicon = require("serve-favicon");

const dev = app.get("env") !== "production";

if (!dev) {
  app.disable("x-powerd-by");
  app.use(morgan("common"));
  app.use(compression());
}

const PORT = parseInt(process.env.PORT) || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(favicon(path.resolve(__dirname, "client", "build", "favicon.ico")));
app.use(express.static(path.resolve(__dirname, "client", "build")));
app.use("/assets", express.static("static"));

app.use("/api/games", require("./routes/games.route"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});
