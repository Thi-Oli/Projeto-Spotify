import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://projetoSpotify:4YL2pRhnsw0oHVGx@cluster0.6h2awa1.mongodb.net/?appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
