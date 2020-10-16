/* A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive.  */

var flashDriveMemory = prompt('Please state the flash drive memory in GB?');
var storage = flashDriveMemory / 820 * 1024;
console.log(`${storage} 820MB files can be stored on your flash drive memory`);