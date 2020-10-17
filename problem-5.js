/* Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.  */

/* var request distance
var request prefered time 
calculate speed  */

var distance = prompt('How many km are between city A and B?');
var time = prompt('How many minutes do you want to spend on your trip?');
var speed = distance / (time / 60);
console.log(speed);