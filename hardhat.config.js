require("dotenv").config(); //all the key value pairs are being made available due to this lib
require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const BLACKSUN_SEPOLIA = process.env.BLACKSUN_SEPOLIA_URL;
const ALCHEMY_SEPOLIA = process.env.ALCHEMY_SEPOLIA_URL;
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: BLACKSUN_SEPOLIA,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
  },
};
