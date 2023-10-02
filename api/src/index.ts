import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import "express-async-errors";
import "dotenv/config";
import { routes } from "./router";

const PORT = process.env.PORT || 3002;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@localhost:27017`).then(() => {
  const app = express();
  app.use(express.json());
  app.use(routes);


  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(500);
    console.error(error);
    next();
  });


  app.listen(PORT, () => {
    console.log(`🚀 server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error(err);
});

