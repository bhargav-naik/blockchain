// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC20";

contract MyToken is ERC20 {

    constructor(uint256 _supply) ERC20("MyToken", "MTK") {
        _mint(msg.sender, _supply * (10 ** decimals()));
    }

}