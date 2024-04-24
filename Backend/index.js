import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user.route.js";
import cors from "cors";

dotenv.config(); //remember

app.use(cors()); //remember

app.use(express.json()); //remember

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("error", error);
  });

app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`port listening to ${PORT}`);
});
