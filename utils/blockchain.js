const { Gateway, Wallets } = require('fabric-network');
const path = require('path');
const fs = require('fs');

async function connectToNetwork(channelName) {
    const ccpPath = path.resolve(__dirname, '..', 'network-config', 'network-config.yaml');
    const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

    const walletPath = path.join(process.cwd(), 'wallet');
    const wallet = await Wallets.newFileSystemWallet(walletPath);

    const gateway = new Gateway();
    await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });

    const network = await gateway.getNetwork(channelName);
    const contract = network.getContract('yourChaincodeName');

    return contract;
}

module.exports = { connectToNetwork };
