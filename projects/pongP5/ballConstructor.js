function ballConstructor() {
  //this will make the balls be random sizes
  this.size = random(15, 30);
  // we want the balls x position spawn to be a random spot between
  //the size of the ball/2 and the width (to account for the balls size since the x positon 
  // is actually in the middle
  this.x = random((this.size / 2), width - (this.size / 2));
  //we want this to be half the size which will
  //account fo the radius of the ball
  this.y = (this.size / 2);
  //here we set the speed of the ball
  //randomly between 1 and 3
  this.speedX = random(1, 3);
  this.speedY = random(1, 3);
  
  //method to display the ball
  this.display = function() {
    ellipse(this.x, this.y, this.size);
  }
  
  //method to move the ball
  this.moveAndBounce = function() {
    //I'm making the speed variables a random number
    //between 2 and 6 to make the game a little different
    //every time
    //move
    this.x += this.speedX;
    this.y += this.speedY;
    //bounce
    //everytime we see a 15 we should change it to 
    //(this.size / 2) so it will account for every size
    if ((this.x + (this.size / 2) > width) || (this.x < (this.size / 2))) {
      this.speedX *= -1;
    } //same for y
    if (this.y < (this.size / 2)) {
      this.speedY *= -1;
    }
  }
  
  //check if the y position of the ball is greater than the
  //middle of the paddle 
  this.paddleDetect = function(sound) {
    //this is the logic flow for the paddle bouncing the ball back
    //is the y position of 'this' ball more than the position of the
    //paddle and is it within the bounds of the paddles x position
    if ((this.y + (this.size / 2) > paddle.y - 1) && (this.x < paddle.x + 100) && (this.x > paddle.x)) {
      //reverse the ball's direction
      this.speedY *= -1;
      //update the score
      paddle.score++;
      //play the sound passed from the parameter
      sound.setVolume(0.1);
      sound.play();
    }
  }
}