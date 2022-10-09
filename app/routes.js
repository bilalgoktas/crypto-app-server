import express from "express";
import * as controller from "./controller.js";

const router = express.Router();

router.get("/cryptos/:category", controller.readAllPrices);
router.get("/metadata/:id", controller.readOneMetaData);
router.get("/price/:id", controller.readOnePrice);
router.get("/top20", controller.readTopTwenty);

export default router;
