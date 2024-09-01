import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.get("/api/ping", (req, res) => {
  res.status(200).json({ message: "pong!!!", success: true });
});
app.listen(port, () => {
  console.log("Server firing at port", port);
});
