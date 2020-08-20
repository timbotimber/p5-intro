class Player {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.image;
  }

  preloadPlayer() {}

  setupPlayer() {}

  drawPlayer() {
    if (keyIsDown(39)) {
      this.x += 2;
    }
    if (keyIsDown(37)) {
      this.x -= 2;
    }
    fill("red");
    rect(this.x, this.y, 50, 50);
    image(this.image, this.x, this.y, 50, 50);
  }
}
