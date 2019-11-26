var friends = ["Aneki", "Quell", "Clarity", "Sleepy", "Roghar", "DM Crimson"];

console.log(friends)

var team1 = new Array();
var team2 = new Array();
var team3 = new Array();
var team4 = new Array();

for(var i = 0;i<friends.length;i++)
{
  if (i%2 == 0)
  {
    team1.push(friends[i]);
  }
  else
  {
    team2.push(friends[i]);

  }
}

//OR BY INDEX WITHIN FOR LOOP
// var team1 = new Array();
// var team2 = new Array();

// for (var i = 0; i < friends.length; i++) {
//     if (i % 2 == 0) {
//         // if the index is even, add the person to team 1
//         team1[team1.length] = friends[i];
//     } else {
//         // otherwise add them to team 2
//         team2[team2.length] = friends[i];
//     }
// }

console.log("populating by pushing into new array")
console.log(team1)
console.log(team2)

for(var i = 0;i<friends.length;i++)
{
  if (i%2 == 0)
  {
    team3.unshift(friends[i]);
  }
  else
  {
    team4.unshift(friends[i]);

  }
}
console.log("populating by unshifting into new array")
console.log(team3)
console.log(team4)

var fruits = ['kiwi','rambutan','mango','tomato'];

console.log("\n" + fruits);

fruits.pop();

console.log("after pop: " + fruits);

fruits.push("gooseberry");

console.log("after push gooseberry : " + fruits);

fruits.shift()

console.log("after shift: " + fruits);

fruits.unshift("banana")

console.log("after unshift banana: " + fruits);
