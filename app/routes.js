import express from "express";
import * as controller from "./controller.js";

const router = express.Router();

router.get("/all", controller.readAll);
router.get("/info/:id", controller.readOneInfo);

export default router;
