import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.get("/ping", (req, res) => {
  res.json({ message: "pong!!!" });
});
app.listen(port, () => {
  console.log("Server firing at port", port);
});
