import express from "express";
import chats from "../backend/data/data.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.get("/api/chat", (req, res) => {
  res.json(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const chat = chats.find((c) => c._id === req.params.id);
  res.json(chat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
