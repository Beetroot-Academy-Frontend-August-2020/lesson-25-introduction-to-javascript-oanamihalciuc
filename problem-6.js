/* Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant. */

const RATE = 0.85;
var usd = prompt('Please input the UDS total amount to be converted to EUR');
var eur = usd * RATE;
console.log(eur);