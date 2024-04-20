import { MongoClient } from "mongodb";

async function connectToCluster(uri) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    await mongoClient.connect();
    return mongoClient;
  } catch (error) {
    throw error
  }
}

export async function updateTextCalls(email) {
  const uri = process.env.DB_URI;
  let mongoClient;

  try {
    mongoClient = await connectToCluster(uri);
    const db = mongoClient.db("llm_offset");
    const collection = db.collection("users");

    await collection.updateOne(
      { email: email },
      { $inc: { text_count: 1, image_count: 0 } },
      { upsert: true }
    );

  } catch (error) {
    throw error
  } finally {
    if (mongoClient) {
      await mongoClient.close();
    }
  }
}

export async function updateImageCalls(email) {
    const uri = process.env.DB_URI;
    let mongoClient;
  
    try {
      mongoClient = await connectToCluster(uri);
      const db = mongoClient.db("llm_offset");
      const collection = db.collection("users");
  
      await collection.updateOne(
        { email: email },
        { $inc: { text_count: 0, image_count: 1 } },
        { upsert: true }
      );

    } catch (error) {
      throw error
    } finally {
      if (mongoClient) {
        await mongoClient.close();
      }
    }
  }