import express from "express";
import { getData } from "../controllers/data.controller.js";

const router = express.Router();

router.post("/data", getData);

export default router;