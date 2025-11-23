// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;
const vyMax = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
    if (keyIsDown(SHIFT)) { x -= 5; }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
    if (keyIsDown(SHIFT)) { x += 5; }
  }
  if (keyIsDown(UP_ARROW)) { y -= 5; }
  if (keyIsDown(DOWN_ARROW)) { y += 5; }
  // BLANK[1] キャラクターの左右移動

  y += vy
  vy += g;
  y = constrain(y, 0, height * 0.8 - size / 2);

  // BLANK[2] 重力とジャンプ 



  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}
function keyPressed() {
    if (key == " " && y== constrain(y, height * 0.75, height * 0.8)) {
      vy = -vy * 1;
    }
  }



