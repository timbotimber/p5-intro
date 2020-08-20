console.log("hello?");
const game = new Game();

console.log(game);

function preload() {
  game.preloadGame();
}

function setup() {
  createCanvas(500, 500);
  game.setupGame();
}

function draw() {
  game.drawGame();
}

function keyPressed() {
  if (keyCode === 38) {
    console.log("I'm pressing the up key");
    game.y -= 10;
  } else if (keyCode === 40) {
    game.y += 10;
  }
}

function mouseClicked() {
  console.log("love to click", mouseX, mouseY);
  game.circleX = mouseX;
  game.circleY = mouseY;
}
