// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./CounterTransparentV1.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract CounterTransparentV2 is CounterTransparentV1 {
    bool public paused;

    function initializeV2() public reinitializer(2) {
        paused = false;
        note = "Transparent V2";
    }

    function setPaused(bool _paused) external {
        paused = _paused;
    }

    function sub(uint256 amount) external {
        require(!paused, "Paused");
        require(value >= amount, "Underflow");
        value -= amount;
    }

    function version() external pure virtual override  returns (string memory) {
        return "CounterTransparentV2";
    }

    function getInfo() public view returns(address, uint256, bool) {
        return (owner, value, paused);
    }
}