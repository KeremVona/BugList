import express from "express";
import {
  getAllBugs,
  getBug,
  addBug,
  updateBug,
  deleteBug,
} from "../controllers/bugsController.js";

const router = express.Router();

router.get("/", getAllBugs);
router.get("/:id", getBug);
router.post("/", addBug);
router.put("/:id", updateBug);
router.delete("/:id", deleteBug);

export default router;
