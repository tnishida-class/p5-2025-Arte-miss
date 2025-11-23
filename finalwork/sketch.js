// 最終課題を制作しよう

let a = 0, b = 0, c = 0;
let sumCaptured = null;  // 確定した和（停止後も表示）
let running = true;      // 数字生成中かどうか
let updateInterval = 1; // ミリ秒単位の更新間隔
let lastUpdate = 0;

function setup() {
  createCanvas(520, 240);
  textSize(32);
  textAlign(LEFT, TOP);
}

function draw() {
  background(245);

  // 生成が「動いている」場合だけ、一定間隔で a,b,c を更新
  if (running && millis() - lastUpdate >= updateInterval) {
    a = int(random(1, 7));
    b = int(random(1, 7));
    c = int(random(1, 7));
    lastUpdate = millis();
  }

  // 現在の値や状態の表示
  fill(30);
  text(` ${a},    ${b},    ${c}`, 20, 30);
  text("result:", 20, 100);

  if (a == 1 && b == 1 && c == 1) {
    fill(255, 0, 0);
    text("PINZORO", 120, 100);
  } else if ((a == 1 && b == 2 && c == 3) || (a == 1 && b == 3 && c == 2) || (a == 2 && b == 1 && c == 3) || (a == 2 && b == 3 && c == 1) || (a == 3 && b == 2 && c == 1) || (a == 3 && b == 1 && c == 2)) {
    fill(0, 0, 255);
    text("HIHUMI", 120, 100);
  } else if ((a == 4 && b == 5 && c == 6) || (a == 4 && b == 6 && c == 5) || (a == 5 && b == 4 && c == 6) || (a == 5 && b == 6 && c == 4) || (a == 6 && b == 4 && c == 5) || (a == 6 && b == 5 && c == 4)) {
    fill(0, 255, 0);
    text("SHIGORO", 120, 100);
  } else if (a == b && b == c) {
    fill(255, 0, 0);
    text("ARASHI", 120, 100);
  } else if (a == b) {
    fill(0, 120, 70);
    text(c, 120, 100);
  } else if (a == c) {
    fill(0, 120, 70);
    text(b, 120, 100);
  } else if (b == c) {
    fill(0, 120, 70);
    text(a, 120, 100);
  } else {
    fill(0);
    text("MENASHI", 120, 100);
  }
}

// 任意タイミングで「確定＆停止」：クリック
function mousePressed() {
  if (running) {
    sumCaptured = a + b + c;
    running = false;        // 生成停止
  }
}

// 任意タイミングで「確定＆停止」：スペースキー
function keyPressed() {
  if (key === ' ' && running) {
    sumCaptured = a + b + c;
    running = false;        // 生成停止
  }
  // （任意）Rキーで再開、上下キーで更新間隔調整
  if (key === 'r' || key === 'R') {
    sumCaptured = null;     // 以前の確定表示をクリア（保持したいなら消さない）
    running = true;         // 再開
  }
  if (keyCode === UP_ARROW) updateInterval = max(50, updateInterval - 50);
  if (keyCode === DOWN_ARROW) updateInterval = min(2000, updateInterval + 50);
}
