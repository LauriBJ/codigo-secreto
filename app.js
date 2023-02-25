const express = require("express");
const app = express();
//<div class="secret" style="display: none;">HcUy6Re2LLBRtj</div>
app.get("/", (req, res) => {
  res.send("<h1>HcUy6Re2LLBRtj</h1>");
});

app.listen(3000, () => console.log("Listening on port 3000!"));
