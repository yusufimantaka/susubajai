import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/hello", (req, res) => {
  res.send("Hello Yang Mulia!");
});

app.get("/sum", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  const result = a + b;

  res.json({ result });
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ID is ${userId}` });
});




const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
