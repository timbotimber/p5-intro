const game = new Game();

console.log("hello");

function preload() {
  console.log(game.preloadGame);
  game.preloadGame();
}

function setup() {
  createCanvas(500, 500);
  console.log("setup");
  game.setupGame();
}

function draw() {
  game.drawingGame();
  console.log("this is the draw");
}

function keyPressed() {
  if (keyCode === 38) {
    game.y -= 10;
    console.log("key up!");
  } else if (keyCode === 40) {
    game.y += 10;
    console.log("key down!");
  }
}

function mouseClicked() {
  console.log("clicking here", mouseX, mouseY);
  game.circleX = mouseX;
  game.circleY = mouseY;
}
