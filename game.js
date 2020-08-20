class Game {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.circleX = 200;
    this.circleY = 100;
  }

  preloadGame() {
    this.playerImg = loadImage("rtwo.png");
  }

  setupGame() {
    this.player = new Player();
    this.player.img = this.playerImg;
  }
  drawingGame() {
    clear();
    fill("red");
    //this.x++;
    rect(this.x, this.y, 100, 100);
    fill("yellow");
    circle(this.circleX, this.circleY, 100);
    push();
    strokeWeight(20); // Default

    line(0, 0, 500, 500);

    pop();
    this.player.drawPlayer();
  }
}
