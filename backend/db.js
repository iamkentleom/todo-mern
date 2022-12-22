import { config } from "dotenv";

config();

import { MongoClient, ServerApiVersion } from "mongodb";

let database = null;

const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const connectToDatabase = async () => {
  try {
    await client.connect();
    database = client.db("nuwork");

    console.log("Connected to the database.");
  } catch (error) {
    console.log("Unable to connect to the database");
    return process.exit(1);
  }
};

export { client, connectToDatabase, database };
