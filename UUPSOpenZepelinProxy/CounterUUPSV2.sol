// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./CounterUUPSV1.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract CounterUUPSV2 is CounterUUPSV1 {
    bool public paused;

    function initializeV2() public reinitializer(2) {
        paused = false;
        note = "UUPS V2";
    }

    function setPaused(bool _paused) external onlyOwner {
        paused = _paused;
    }

    function sub(uint256 amount) external onlyOwner {
        require(!paused, "Paused");
        require(value >= amount, "Underflow");
        value -= amount;
    }
}