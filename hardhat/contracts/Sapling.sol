// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SaplingNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("SaplingNFT", "SAP") {}

    function safeMint(address to) public {
        _safeMint(to, _tokenIdCounter.current());
        _tokenIdCounter.increment();
    }

    function _baseURI() internal pure override returns (string memory)
    {
        return "ipfs://QmZpkQXzbtWiJp3wzFX1ZQ9DGsinpNSREhY3aez1ykwejm?filename=sapling.json";
    }

    function _beforeTokenTransfer(
    address from, 
    address to, 
    uint256 tokenId
    ) internal override virtual {
    require(from == address(0), "This a Soulbound token. It cannot be transferred. It can only be burned by the token owner."); 
    super._beforeTokenTransfer(from, to, tokenId);  
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}