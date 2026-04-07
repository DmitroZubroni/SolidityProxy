// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";

contract CounterTransparentV1 is Initializable {
    address public owner;
    uint256 public value;
    string public note;
    

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    function initialize(address _owner, uint256 _value) public initializer {
        owner = _owner;
        value = _value;
        note = "Transparent V1";
    }
    
    function getData(address _owner, uint _value) public pure returns(bytes memory) {
        bytes memory data = abi.encodeWithSignature("initialize(address,uint256)",_owner,_value);
        return data;
    }

    function setValue(uint256 _value) external {
        value = _value;
    }

    function add(uint256 amount) external {
        value += amount;
    }

    function version() external pure virtual  returns (string memory) {
        return "CounterTransparentV1";
    }
}