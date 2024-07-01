import express from "express";
import { promises as fs } from "fs";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;

const app = express();
app.use(cors());
const PORT = 3000;

app.get("/api/planets", async (req, res) => {
    try{
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection("planets");
        const planets = await collection.find({}).toArray();
        res.json(planets);
    }
    catch (err) {
        console.error("Error:", err);
        res.status(500).send("error");
      }
});

app.get("/api/characters", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const collection = db.collection("characters");
      const planets = await collection.find({}).toArray();
      res.json(planets);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("error");
  }
});

app.get("/api/films", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("films");
    const planets = await collection.find({}).toArray();
    res.json(planets);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("error");
  }
});

app.get("/api/planets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("planets");
    const planets = await collection.find({"id": parseInt(id)}).toArray();
    res.json(planets);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("error");
  }
});

app.get("/api/characters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("characters");
    const characters = await collection.find({ id: parseInt(id) }).toArray();
    res.json(characters);
  } catch (err) {
    console.error("Error:", err);
  }
});

app.get("/api/films/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("films");
    const films = await collection.find({ id: parseInt(id) }).toArray();
    res.json(films);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("error");
  }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });