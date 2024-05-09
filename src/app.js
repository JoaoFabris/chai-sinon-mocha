// src/app.js

const express = require("express");
const cacauTrybe = require("./cacauTrybe");

const app = express();

app.get("/chocolates", async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get("/chocolates/:id", async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolates = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolates)
    return res.status(404).json({ message: "Chocolate not found" });
  res.status(200).json({ chocolates });
});

app.get("/chocolates/brand/:brandId", async (req, res) => {
  const { brandId } = req.params;

  const chocolatesBrand = await cacauTrybe.getChocolateByBrandID(Number(brandId));
  if (!chocolatesBrand)
    return res.status(404).json({ message: "Brand not found" });
  res.status(200).json({ chocolatesBrand });
});
module.exports = app;
