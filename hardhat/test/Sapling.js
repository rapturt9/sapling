const { expect } = require("chai");

describe("SaplingNFT", function () {
  it("Should return the right URI after minting", async function () {
    const SaplingNFT = await ethers.getContractFactory("SaplingNFT");
    const [owner, addr1] = await ethers.getSigners();

    const sapling = await SaplingNFT.deploy();
    await sapling.deployed();

    await sapling.connect(owner).safeMint(addr1.address);
    expect(await sapling.tokenURI(0)).to.equal(
      "ipfs://QmZpkQXzbtWiJp3wzFX1ZQ9DGsinpNSREhY3aez1ykwejm?filename=sapling.json0"
    );
  });

  it("Should prevent transfer of the token", async function () {
    const SaplingNFT = await ethers.getContractFactory("SaplingNFT");
    const [owner, addr1, addr2] = await ethers.getSigners();

    const sapling = await SaplingNFT.deploy();
    await sapling.deployed();

    await sapling.connect(addr1).safeMint(addr1.address);

    await expect(
      sapling.connect(addr1).transferFrom(addr1.address, addr2.address, 0)
    ).to.be.revertedWith(
      "This a Soulbound token. It cannot be transferred. It can only be burned by the token owner."
    );
  });
});
