import express from "express";
import * as controller from "./controller.js";

const router = express.Router();

router.get("/all", controller.readAllPrices);
router.get("/metadata/:id", controller.readOneMetaData);
router.get("/price/:id", controller.readOnePrice);

export default router;
