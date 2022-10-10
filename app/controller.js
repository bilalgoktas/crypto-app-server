import fetch from "node-fetch";
import allPrices from "../fake-data/allPrices.json";
import metaDatas from "../fake-data/metaDatas.json";
import popPrices from "../fake-data/popPrices.json";
import pricesToFilter from "../fake-data/pricesToFilter.json";
import oneMetaData from "../fake-data/oneMetaData.json";
import onePrice from "../fake-data/onePrice.json";
import topTwenty from "../fake-data/topTwenty.json";

export const readAllPrices = async (req, res) => {
  // const response = await fetch(
  //   "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?" +
  //     new URLSearchParams({
  //       cryptocurrency_type: req.params.category,
  //       limit: 10,
  //       start: (req.params.currentPage - 1) * 10 + 1,
  //       convert: req.query.convert,
  //     }),
  //   { headers: { "X-CMC_PRO_API_KEY": "21c7dee4-29ae-4443-a620-d0bfbfcfc8ea" } }
  // );
  // const data = await response.json();
  // res.status(200).json(data).end();

  res.status(200).send(allPrices);
};

export const readMetaData = async (req, res) => {
  // const response = await fetch(
  //   `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${req.query.id}`,
  //   { headers: { "X-CMC_PRO_API_KEY": "21c7dee4-29ae-4443-a620-d0bfbfcfc8ea" } }
  // );
  // const data = await response.json();
  // res.status(200).json(data).end();
  const data = metaDatas[req.params.id];

  res.status(200).send(data);
};

export const readPrice = (req, res) => {
  const data = pricesToFilter[req.query.id];

  res.status(200).send(data);
};

export const readPopPrice = (req, res) => {
  const data = popPrices[req.query.id];

  res.status(200).send(data);
};

export const readTopTen = async (req, res) => {
  // const response = await fetch(
  //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&convert=${req.query.convert}`,
  //   { headers: { "X-CMC_PRO_API_KEY": "21c7dee4-29ae-4443-a620-d0bfbfcfc8ea" } }
  // );
  // const data = await response.json();

  // res.status(200).json(data).end();
  const data = allPrices.slice(0, 10);
  res.status(200).send(data);
};
