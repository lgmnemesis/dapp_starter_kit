// eslint-disable-next-line no-undef
const Token = artifacts.require("LgmToken");

module.exports = async function (deployer) {
  await deployer.deploy(Token);

  // const token = await Token.deployed();
};
