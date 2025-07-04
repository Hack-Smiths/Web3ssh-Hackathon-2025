const { ethers } = require("hardhat");

async function main() {
  const PoSCBadge = await ethers.getContractFactory("PoSCBadge");
  const contract = await PoSCBadge.deploy();

  await contract.deployed();

  console.log("PoSCBadge deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
