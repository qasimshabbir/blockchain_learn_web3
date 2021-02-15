// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Storage {
    string public data;
    
    function getData() external view returns(string memory){
        return data;
    }   

    function setData(string calldata _data) external{
        data = _data;
    }
}