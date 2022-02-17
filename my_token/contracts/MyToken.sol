pragma solidity 0.8.11

contract MyToken {

    string private name;
    string private symbol;
	
	constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }
}