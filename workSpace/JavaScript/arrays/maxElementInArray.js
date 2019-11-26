// In this exercise, we have an array of numbers
var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];

var max = 0;
// We'll use a for loop to calculate that sum
for (var i = 0; i < testArray.length; i++) {

    if (testArray[i] > max)
    max = testArray[i];
}
console.log("The max of " + testArray + " is: " + max);
