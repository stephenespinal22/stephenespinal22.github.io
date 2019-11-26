function startButton() {
  // enter your code here

  document.getElementById("allImages").style.display = "block";
//   document.getElementById("start").innerHTML = "New text!"
// }"



  var divStephen = '<div onclick="lose()" class= "images" id = "stephen"><img src=https://raw.githubusercontent.com/ttolentino89/textGame/master/profilePics/stephen1.jpg></div>';

 var divTrish =  '<div onclick="lose()"class = "images" id = "trish"><img src=https://raw.githubusercontent.com/ttolentino89/textGame/master/profilePics/trish2.jpg></div>';

 var divWin =  '<div onclick="win()" class = "images" id = "answer"></div>';

 var divJohan =  '<div onclick="lose()" class= "images" id = "johan"><img src=https://raw.githubusercontent.com/ttolentino89/textGame/master/profilePics/jhoan1.jpg></div>';



 var array = [divStephen,divTrish,divWin,divJohan];

  array = shuffleArray(array);




  document.getElementById("allImages").innerHTML =array[0] + array[1] + array[2] + array[3] ;





 var randomImages = ["https://raw.githubusercontent.com/ttolentino89/textGame/master/profilePics/john2.jpg","https://raw.githubusercontent.com/ttolentino89/textGame/master/profilePics/cay2.jpg","https://raw.githubusercontent.com/ttolentino89/textGame/master/profilePics/andrew2.jpg","https://raw.githubusercontent.com/ttolentino89/textGame/master/profilePics/sam2.jpg","https://raw.githubusercontent.com/ttolentino89/textGame/master/profilePics/gaby2.jpg","https://raw.githubusercontent.com/ttolentino89/textGame/master/profilePics/marie2.jpg","https://raw.githubusercontent.com/ttolentino89/textGame/master/profilePics/corey2.jpg","https://raw.githubusercontent.com/ttolentino89/textGame/master/profilePics/ken2.jpg","https://raw.githubusercontent.com/ttolentino89/textGame/master/profilePics/mike2.jpg","https://raw.githubusercontent.com/ttolentino89/textGame/master/profilePics/hector2.jpg"];

    var randomPos =(Math.floor(Math.random()* randomImages.length));
  console.log(randomPos);


  document.getElementById("answer").innerHTML = "<img src=" + randomImages[randomPos] + ">";



}

function win()
{
  document.getElementById("youWin").style.display = "block";
 alert("You win! Welcome to Cohort 7");
  document.getElementById("allImages").style.display = "none";
  // document.getElementById("answer").style.borderColor = "red";
}

function lose()
{
  document.getElementById("loser").style.display = "block";
  document.getElementById("allImages").style.display = "none";
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  return array;
}

document.getElementById("start").addEventListener("click", function() {
    document.getElementById("youWin").style.display = "none";
    document.getElementById("loser").style.display = "none";


  startButton();
});

document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("allImages").style.display = "none";
  document.getElementById("youWin").style.display = "none";
    document.getElementById("loser").style.display = "none";

  console.clear();
});
