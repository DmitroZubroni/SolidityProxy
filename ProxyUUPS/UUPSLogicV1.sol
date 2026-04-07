// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract UUPSLogicV1 {
    uint public value;
    address public owner;

    function initialize() public {
        require(owner == address(0), "Already initialized");
        owner = msg.sender;
    }

    function setValue(uint _value) public {
        value = _value;
    }

    function upgrade(address newImplementation) public {
        require(msg.sender == owner, "Not owner");

        assembly {
            sstore(0, newImplementation) // слот implementation
        }
    }
}