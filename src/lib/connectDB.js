import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion_v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("revive-car");
  } catch (error) {
    console.log(error);
  }
};
