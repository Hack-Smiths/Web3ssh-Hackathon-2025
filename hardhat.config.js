require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { MUMBAI_RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
