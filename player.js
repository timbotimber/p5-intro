class Player {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.img;
  }

  drawPlayer() {
    if (mouseIsPressed) {
      this.x = 0;
      this.y = 0;
    }

    if (keyIsDown(87)) {
      this.y -= 1;
    } else if (keyIsDown(65)) {
      this.x -= 1;
    } else if (keyIsDown(83)) {
      this.y += 1;
    } else if (keyIsDown(68)) {
      this.x += 1;
    }
    image(this.img, this.x, this.y, 200, 200);
  }
}
