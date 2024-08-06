import { MongoClient, ServerApiVersion } from 'mongodb'
import 'dotenv/config'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGO_STRING_CONNECTION, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    let db = client.db('online_learning_platform');
    let collections = await db.collection('courses').find().toArray();
    
    console.log(collections)
  } finally {
    await client.close();
  }
}

run()