//console.log(Math.round(Math.random() * 6));
// round the random number to integer value
//random number within range 0-6

for (var i = 0; i < 1; i++)
console.log(Math.ceil(Math.random()));

function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDice(4))
