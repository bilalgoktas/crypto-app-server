import allPrices from "../fake-data/allPrices.json";
import metaDatas from "../fake-data/metaDatas.json";
import popPrices from "../fake-data/popPrices.json";
import pricesToFilter from "../fake-data/pricesToFilter.json";

export const readAllPrices = async (req, res) => {
  res.status(200).send(allPrices);
};

export const readMetaData = (req, res) => {
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
  const data = allPrices.slice(0, 10);
  res.status(200).send(data);
};
