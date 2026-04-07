// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TransparentProxy {

    address public implementation;
    address public admin;

    constructor(address _impl) {
        implementation = _impl;
        admin = msg.sender;
    }

    function upgrade(address _newImpl) public {
        require(msg.sender == admin, "Not admin");
        implementation = _newImpl;
    }

    receive() external payable {
    _delegate();
}

fallback() external payable {
    _delegate();
}

function _delegate() internal {
    address impl = implementation;

    assembly {
        calldatacopy(0, 0, calldatasize())
        let result := delegatecall(gas(), impl, 0, calldatasize(), 0, 0)

        let size := returndatasize()
        returndatacopy(0, 0, size)

        switch result
        case 0 { revert(0, size) }
        default { return(0, size) }
    }
}
}