// Check to see if the user likes cake
var likesCake = confirm("Do you like cake?");
// If the user likes cake, find out what their favorite cake is
if (likesCake) {
    var favoriteCake = prompt("What is your favorite cake?");
    // Alert them that their favorite cake is whatever they inputted
    // from the prompt() function
    alert("Your favorite cake is: " + favoriteCake);
} else {
    // If the user doesn't like cake, show an alert that the cake is a lie
    alert("The cake is a lie anyhow.");
}


  var password = "pass";

  var test = prompt("Please enter your password:");

 if(test == password)
    {
        alert("Welcome");
    }
  else
    {
      alert("Wrong password");
    }

  console.log(test);

var count = 10;
while(count >= 0)
{
  console.log(count);
  count--;
}

var count = 0;
var sum = 0;
while(count < 5)
  {
    sum = sum + count;
    console.log(count)
    count++;
  }
console.log(sum)

var count = 0;
var sum = 0;
while(count < 5)
  {
    sum = sum + count;
    console.log(count)
    count++;
  }
console.log(sum + "\n")

var countdo = 10;
do {
  console.log(countdo)
  countdo-=5;
}while (countdo >= 0)
