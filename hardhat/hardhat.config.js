require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: {
        mnemonic: process.env.MNEMONIC, // line 25
        path: "m/44'/52752'/0'/0",
      },
      chainId: 44787,
    },
    celo: {
      url: "https://forno.celo.org",
      accounts: {
        mnemonic: process.env.MNEMONIC, // line 25,
        path: "m/44'/52752'/0'/0",
      },
      chainId: 42220,
    },
  },
};
