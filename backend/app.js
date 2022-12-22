import express, { json } from "express";
import cors from "cors";
import { client, connectToDatabase } from "./db";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 3000;

connectToDatabase();

app.use(cors());
app.use(json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server running at port ${port}.`);
});

process.on("SIGINT", async () => {
  console.log("Disconnecting to the database.");
  await client.close();
  process.exit();
});
