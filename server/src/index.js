import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import bugsRoutes from "./routes/bugsRoutes.js";

const app = express();

dotenv.config({ path: "../.env" });

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/api/bugs", bugsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
