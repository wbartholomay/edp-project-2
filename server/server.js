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
  try {
    const test_obj = { script: "This is a test." };
    res.json(test_obj);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("error");
  }
});

app.get("/api/films/:id/characters", async (req, res) => {
  try {
    const { id } = req.params;

    const collectionName = "films_characters";
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const cursor = await collection
      .find({ film_id: Number(id) });
    //   .project({ character_id: 1, _id: 0 });

    const characters = [];
    const character_collection = db.collection("characters");

    let i = 0;

    while (await cursor.hasNext()) {
        const obj = await cursor.next();
        const id = obj.character_id;
      const charCursor = await character_collection.find({ id: id });
      if (await charCursor.hasNext()) {
        const character = await charCursor.next();
        characters.push(character);
      }
    }


    res.json(characters);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
