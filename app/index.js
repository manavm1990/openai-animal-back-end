import express from "express";
import getCompletion from "./controller.js";
import lib from "./lib/index.js";

const PORT = 3000;

const app = express();

app.get("/:animal", (req, res) => {
  const { animal } = req.params;

  const animalPrompt = lib.generateAnimalPrompt(animal);

  getCompletion(animalPrompt)
    .then((completion) => {
      res.json({ completion });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
