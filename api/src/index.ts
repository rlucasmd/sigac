import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "dotenv/config";

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());


app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(500);
  console.error(error);
  next();
});


app.listen(PORT, () => {
  console.log(`🚀 server is running on http://localhost:${PORT}`);
});

