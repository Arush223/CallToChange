import { MongoClient } from "mongodb";
import { config } from "dotenv";

async function connectToCluster(uri) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    console.log("Connecting to MongoDB Atlas cluster...");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");

    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
}

export async function updateCalls(email) {
  const uri = process.env.DB_URI;
  let mongoClient;

  try {
    mongoClient = await connectToCluster(uri);
    const db = mongoClient.db("llm_offset");
    const collection = db.collection("users");

    const updateResult = await collection.updateOne(
      { email: email },
      { $inc: { count: 1 } },
      { upsert: true }
    );
    
    if (updateResult.upsertedCount > 0) {
      console.log(
        `Added a new document with id ${updateResult.upsertedId._id}`
      );
    }
  } catch (error) {
    console.error("Failed to update or insert document", error);
  } finally {
    if (mongoClient) {
      await mongoClient.close();
    }
  }
}
