require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_HTTPS,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    }
  }
};
