const MyToken = artifacts.require("MyToken")

contract("myToken", accounts => {
    before( async () => {
            token = await MyToken.deployed()
        })

    it('give 1M to caller', async () => {
        let balance = await token.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, 1000000, 'balance should be 1M')
    });

    it('transfer 1000 token to account1', async () => {
        let amount = web3.utils.toWei('1000', 'ether')
        await token.transfer(accounts[1], amount, {from: accounts[0]})
        let balance = await token.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, 1000, 'account1 balance should be 1000')
    });
})