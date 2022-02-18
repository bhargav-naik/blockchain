const MyToken = artifacts.require("MyToken")

contract("myToken", accounts => {
    before( async () => {
            token = await MyToken.deployed()
        })

    it('give 1M to caller', async () => {
        let balance = await token.balanceOf(accounts[0])
    });
})