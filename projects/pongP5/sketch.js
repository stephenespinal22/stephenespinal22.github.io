/* 
Final Project

Stephen Espinal 3-20-19

A single player Pong-like experience using p5
Inspiration by Professor D's class example using the blip
to bounce around the screen.
*/

// creating variables
let arrayOfBalls = [];
let paddle;
let isStarted;
let backgroundImage;
let gameOverImage;
let sound;

function preload() {
  //add in the images
  backgroundImage = loadImage("assets/heic1509a.jpg");
  gameOverImage = loadImage("assets/gameover.png");
  //add in a sound effect
  soundFormats('wav');
  sound = loadSound('assets/Laser Gun.wav');
}

/* Here's everything we need to set up for
the game to work. */
function setup() {
  //create the canvas
  imageMode(CENTER);
  createCanvas(400, 600);

  //some hard coded values for the start screen
  //these values won't need to change in any way.
  background(0);
  stroke(0);
  strokeWeight(3);
  fill(36, 158, 113);
  textSize(20);
  textFont('Comic Sans MS'); //sorry

  //call to the text function and write the text
  //of the start screen... the "\n" is a value that
  //means new line
  text("Don't let anything pass your defense.", width / 12, height / 3);
  text("\nMove your mouse to control.", width / 6, height / 2);
  text("\n\nClick to start!", width / 3, height / 2);

  //first setup of the game, assigning false to check has the
  //game started
  isStarted = false;

  //the project calls for at least one object
  //or I would have made this a constructor as well
  paddle = {
    //key pair values for the paddle
    //position, size and method
    x: width / 2,
    y: height - 5,
    width: 100,
    height: 5,
    score: 0,
    //method to display the function
    display: function() {
      //draw the paddle
      rect(this.x, this.y, this.width, this.height);
    }
  }

  //create and instantiate an array of balls
  //using the constructor function
  //and making a new instance of a ball
  for (let i = 0; i < 3; i++)
    arrayOfBalls[i] = new ballConstructor();
}

//here is where it all happens
function draw() {
  if (isStarted) {
    //keep drawing background 
    image(backgroundImage, width / 2, height / 2, width, height);
		//show the score through the text function
    text("Score: " + paddle.score, 25, 25);
    //display object and update the paddle's position 
    //with mouseX 
    paddle.display();
    paddle.x = mouseX;
    //make the balls move, call functions on each ball object
    for (let i = 0; i < arrayOfBalls.length; i++) {
      //call the methods on each ball
      arrayOfBalls[i].display();
      arrayOfBalls[i].moveAndBounce();
      //passing the sound variable to be updated
      //score also gets updated in this method
      arrayOfBalls[i].paddleDetect(sound);
    }
    //check for a gameover
    checkGameOver();
    //game not started
  } else {
    //if the mouse is pressed allow the game to start
    if (mouseIsPressed) {
      isStarted = true;
    }
  }
} //end of draw



function checkGameOver() {
  //go through the balls and check if the ball's 
  //y position is more than the height
  for (let i = 0; i < arrayOfBalls.length; i++) {
    if (arrayOfBalls[i].y > height + (arrayOfBalls[i].size / 2)) {
      //if one ball goes out we want the whole game 
      //to stop so let's go through a loop and stop 
      //all the balls dead in their tracks.
      for (let i = 0; i < arrayOfBalls.length; i++) {
        arrayOfBalls[i].speedX = 0;
        arrayOfBalls[i].speedY = 0;
      }
      //reset the paddle and stop it from moving
      paddle.x = width / 2;
      //display the image
      image(gameOverImage, width / 2, height / 2, 0, 0);
      //play the sound
      sound.setVolume(0.1);
      sound.play();
      //stop the game from moving
      isStarted = false
    } //end of checkGameOver
  }
}