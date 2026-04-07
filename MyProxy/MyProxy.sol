// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

// Контракт Логики
contract StorageV1 {

    address public addressLogic;
    uint256 public age;
    bool public status;
    string placeOfWork;
    
    function setAge(uint256 _num) public {
        age = _num;
    }

    function setStatus() public {
        status = !status;
    }

    function setPlaceOfWork() public {
        status = !status;
    }

    function complexUpdate(uint256 _num, bool _status, string memory _placeOfWork) public {
        age  = _num;
        status = _status;
        placeOfWork = _placeOfWork;
    }

}
// Контракт Прокси
contract Proxy {
    // Slot 0
    address public addressLogic;
    // Slot 1
    uint256 public age;
    // Slot 2
    bool public status;
    // slot 3
    string placeOfWork;

    function setTo(address _newTo) external {
        addressLogic = _newTo;
    }

    // Универсальный метод для вызова ЛЮБОЙ функции
    // _data — это результат выполнения abi.encodeWithSignature(...)
    function lowLevelCall(bytes calldata _data) external returns (bytes memory) {
        (bool success, bytes memory result) = addressLogic.delegatecall(_data);
        require(success, "Delegatecall failed");
        return result;
    }

    // Хелперы для проверки состояния прямо в Proxy
    function getProxyData() external view returns (uint256, bool, string memory) {
        return (age, status, placeOfWork);
    }
}

contract Helper {

    address public addressLogic;

    /*
    // получаем байтовое представление низкоуровневого вызова  и вызываем данный метод

    function getBytes(uint256 _num, bool _status) public pure returns (bytes memory) {
        return abi.encodeWithSignature("complexUpdate(uint256,bool)", _num, _status);
    }

    function lowLevelCall(bytes calldata _data) external returns (bytes memory) {
        (bool success, bytes memory result) = addressLogic.delegatecall(_data);
        require(success, "Delegatecall failed");
        return result;
    }
    */

    /*
    получаем информацию из контракта реализующим логику
    // Вызов функции, которая только читает данные
    function getMethod() external view returns (uint256) {
        // Для чтения используем staticcall
        (bool success, bytes memory data) = addressLogic.staticcall(abi.encodeWithSignature("retrieve()"));
        require(success, "Error: getMethod failed");
        
        // Декодируем полученные байты в uint256
        return abi.decode(data, (uint256));
    }
    */
}