import express from "express";
import * as controller from "./controller.js";

const router = express.Router();

router.get("/cryptos", controller.readAllPrices);
router.get("/metadata/:id", controller.readMetaData);
router.get("/popprice", controller.readPopPrice);
router.get("/price", controller.readPrice);
router.get("/top10", controller.readTopTen);

export default router;
