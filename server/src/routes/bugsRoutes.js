import express from "express";
import { getAllBugs, getBug, addBug } from "../controllers/bugsController.js";

const router = express.Router();

router.get("/", getAllBugs);
router.get("/:id", getBug);
router.post("/", addBug);

export default router;
