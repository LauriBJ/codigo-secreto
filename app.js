const express = require("express");
const app = express();

const { createHash } = require("crypto");

function hash(string) {
  return createHash("sha256").update(string).digest("hex");
}

app.get("/", (req, res) => {
  const encriptado = hash("Hola Mundo");
  res.send(encriptado);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
