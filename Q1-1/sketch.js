// 神戸市のマーク
//function setup(){
  //createCanvas(200, 200);
  //background(255);

  //noFill();
  //strokeWeight(25);
  //strokeCap(SQUARE);
  //arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  //arc(100 + 75, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  // BLANK[1] 空欄を埋めて神戸市のロゴマークを完成させよう
//}


let a = 0, b = 0, c = 0;
let sumCaptured = null;  // 確定した和（停止後も表示）
let running = true;      // 数字生成中かどうか
let updateInterval = 500; // ミリ秒単位の更新間隔
let lastUpdate = 0;

function setup() {
  createCanvas(520, 240);
  textSize(24);
  textAlign(LEFT, TOP);
}

function draw() {
  background(245);

  // 生成が「動いている」場合だけ、一定間隔で a,b,c を更新
  if (running && millis() - lastUpdate >= updateInterval) {
    a = floor(random(0, 10));  // 0〜9 の整数
    b = floor(random(0, 10));
    c = floor(random(0, 10));
    lastUpdate = millis();
  }

  // 現在の値や状態の表示
  fill(30);
  text(`a = ${a}, b = ${b}, c = ${c}`, 20, 30);
  text(`更新間隔: ${updateInterval}ms`, 20, 70);
  text(`状態: ${running ? '更新中' : '停止中'}`, 20, 100);

  // 確定した和の表示
  if (sumCaptured !== null) {
    fill(0, 120, 70);
    text(`確定された sum = ${sumCaptured}`, 20, 140);
  } else {
    fill(120, 0, 70);
    text(`未確定（クリック or スペースで確定＆停止）`, 20, 140);
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
  if (keyCode === UP_ARROW)   updateInterval = max(50, updateInterval - 50);
  if (keyCode === DOWN_ARROW) updateInterval = min(2000, updateInterval + 50);
}