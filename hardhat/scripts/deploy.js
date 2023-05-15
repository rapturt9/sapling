const hre = require("hardhat");

async function main() {
  const SaplingNFT = await hre.ethers.getContractFactory("SaplingNFT");
  const saplingNFT = await SaplingNFT.deploy();

  await saplingNFT.deployed();

  console.log("SaplingNFT deployed to:", saplingNFT.address);
  storeContractData(saplingNFT, "SaplingNFT");
}

function storeContractData(contract, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/address.json`,
    JSON.stringify({ [name]: contract.address }, undefined, 2)
  );

  const MyNFTArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(MyNFTArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
