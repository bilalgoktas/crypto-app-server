import fetch from "node-fetch";
import allPrices from "../fake-data/allPrices.json";
import oneMetaData from "../fake-data/oneMetaData.json";
import onePrice from "../fake-data/onePrice.json";
import topTwenty from "../fake-data/topTwenty.json";

export const readAllPrices = async (req, res) => {
  //   const response = await fetch(
  //     "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  //     { headers: { "X-CMC_PRO_API_KEY": "21c7dee4-29ae-4443-a620-d0bfbfcfc8ea" } }
  //   );
  //   const data = await response.json();

  //   res.status(200).json(data).end();
  res.status(200).send(allPrices);
};

export const readOneMetaData = async (req, res) => {
  //   const response = await fetch(
  //     "https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?" +
  //       new URLSearchParams({
  //         id: req.params.id,
  //       }),
  //     { headers: { "X-CMC_PRO_API_KEY": "21c7dee4-29ae-4443-a620-d0bfbfcfc8ea" } }
  //   );
  //   const data = await response.json();

  //   res.status(200).json(data).end();
  res.status(200).send(oneMetaData);
};

export const readOnePrice = async (req, res) => {
  //   const response = await fetch(
  //     "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?" +
  //       new URLSearchParams({
  //         id: req.params.id,
  //       }),
  //     { headers: { "X-CMC_PRO_API_KEY": "21c7dee4-29ae-4443-a620-d0bfbfcfc8ea" } }
  //   );
  //   const data = await response.json();

  //   res.status(200).json(data).end();
  res.status(200).send(onePrice);
};

export const readTopTwenty = async (req, res) => {
  // const response = await fetch(
  //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&convert=${req.query.convert}`,
  //   { headers: { "X-CMC_PRO_API_KEY": "21c7dee4-29ae-4443-a620-d0bfbfcfc8ea" } }
  // );
  // const data = await response.json();

  // res.status(200).json(data).end();
  res.status(200).send(topTwenty);
};
