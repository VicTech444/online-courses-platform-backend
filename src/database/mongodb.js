import { MongoClient, ServerApiVersion } from 'mongodb'
import 'dotenv/config'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function runDB() {
  try {
    await client.connect();
    return client
  } catch (error) {
    console.error(`An error has been occured: ${error}`)
  }
}
