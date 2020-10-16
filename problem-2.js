/* Request a user’s year of birth, count his age, and display the result. Store the current year as a constant.  */

var birthYear = prompt('What is your birth year?');
const CURRENT_YEAR = 2020;
var age = CURRENT_YEAR - birthYear;
console.log(age);