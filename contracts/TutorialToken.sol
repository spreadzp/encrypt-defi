// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TutorialToken is ERC20 {
    // string public name = "TutorialToken";
    // string public override symbol = "TT";
    // uint256 public override decimals = 2;
    uint256 public INITIAL_SUPPLY = 12000;

  constructor (string memory name, string memory symbol) ERC20(name, symbol){
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
