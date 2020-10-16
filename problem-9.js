/* The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest. */

var depositSum = prompt('What is the amount of your bank deposits for 2 months?');
var monthlyInterest = 5 / 100 / 12;
var interestSum = depositSum * 2 * monthlyInterest;
console.log(`Your interest for the 2 months deposit with a yearly interest rate of 5% is ${interestSum}`);
