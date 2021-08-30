import dotenv from "dotenv";
dotenv.config();

import app from "./index.js";

app.listen((process.env.PORT ? process.env.PORT : 3333), () => {
  console.log(`nodejs-api-mock running on port ${process.env.PORT} 🚀`);
});
