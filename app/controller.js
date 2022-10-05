import fetch from "node-fetch";

export const readAll = async (req, res) => {
  const response = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    { headers: { "X-CMC_PRO_API_KEY": "21c7dee4-29ae-4443-a620-d0bfbfcfc8ea" } }
  );
  const data = await response.json();

  res.status(200).json(data).end();
};

export const readOneInfo = async (req, res) => {
  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?` +
      new URLSearchParams({
        id: req.params.id,
      }),
    { headers: { "X-CMC_PRO_API_KEY": "21c7dee4-29ae-4443-a620-d0bfbfcfc8ea" } }
  );
  const data = await response.json();

  res.status(200).json(data).end();
};
