/* A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left.  */

var walletMoney = prompt('How much money do you have in your wallet?');
var chocolatePrice = prompt('How much does one chocolate bar cost?');
var chocolateNumber = walletMoney / chocolatePrice;
var change = walletMoney - chocolatePrice * chocolateNumber;
console.log(`You can buy ${chocolateNumber} chocolate bars and will remain with ${change} money.`);
