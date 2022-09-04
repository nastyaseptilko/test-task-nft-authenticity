const functions = require("firebase-functions");
const {port, cluster} = require("./config.json");
const express = require("express");
const {Connection, clusterApiUrl} = require("@solana/web3.js");
const {programs} = require("@metaplex/js");

const app = express();

app.get("/verifyToken/:address", async (req, res) => {
  const address = req.params.address;
  const connection = new Connection(clusterApiUrl(cluster), "confirmed");

  try {
    const tokenMetadata = await programs.metadata.Metadata.findByMint(connection, address);
    const isVerified = tokenMetadata.data.data.creators.every((creator) => creator.verified === 1);
    return res.status(200).json({token: address, verified: isVerified});
  } catch (err) {
    functions.logger.warn("An error occurred while getting the metadata for the token: " + err.message);
    return res.status(400).json({token: address, message: `No token found with the address ${address}`});
  }
});

app.listen(port, () => functions.logger.log(`App listening on port: ${port}`));

exports.app = functions.https.onRequest(app);
