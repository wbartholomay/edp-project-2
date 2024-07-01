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
        const test_obj = {"script" : "This is a test."};
        res.json(test_obj);
    }
    catch (err) {
        console.error("Error:", err);
        res.status(500).send("error");
      }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });