import express from "express";
import { sendMessage } from "../controllers/messageController.js";

const router = express.Router();

router.route("/send").post(sendMessage);

export default router;
