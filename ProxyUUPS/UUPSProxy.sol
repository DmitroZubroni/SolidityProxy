// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract UUPSProxy {
    
    constructor(address _impl, bytes memory _data) {
        assembly {
            sstore(0, _impl)
        }

        (bool ok,) = _impl.delegatecall(_data);
        require(ok, "Init failed");
    }

    fallback() external payable {
        assembly {
            let impl := sload(0)

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