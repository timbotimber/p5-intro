class Game {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.circleX = 50;
    this.circleY = 50;
  }

  preloadGame() {
    this.playerImg = loadImage("r2.png");
  }

  setupGame() {
    console.log("Game setup");
    this.player = new Player();
    this.player.image = this.playerImg;
  }

  drawGame() {
    console.log("Game draw");
    clear();
    fill("cyan");
    rect(this.x, this.y, 50, 50);
    fill("yellow");
    push();
    strokeWeight(10); // Default

    line(0, 0, 500, 500);
    pop();
    circle(this.circleX, this.circleY, 50);
    this.player.drawPlayer();
  }
}
