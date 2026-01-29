let screenA, screenB;
let offsetX = 0;
let offsetY = 0;
let depth = 1.0;

function setup() {
  createCanvas(600, 400);
  screenA = createGraphics(width, height);
  screenB = createGraphics(width, height);

  makeScreen(screenA, 1.0, 0, 0, 255);
}

function draw() {
  background(240);

  makeScreen(screenB, depth, 0, 0, 255);

  image(screenA, 0, 0);

  image(screenB, 0, 0);
}
function makeScreen(g, scaleFactor, colR, colG, colB) {
  g.clear();
  g.background(colR, colG, colB);

  g.push();
  g.translate(width / 2 + offsetX, height / 2 + offsetY);
  g.scale(scaleFactor);
  g.translate(-width / 2, -height / 2);

  g.erase();

  let spacing = 20;
let r = 5;

// determine visible world bounds
let minX = (-offsetX) / scaleFactor - spacing;
let maxX = (width - offsetX) / scaleFactor + spacing;
let minY = (-offsetY) / scaleFactor - spacing;
let maxY = (height - offsetY) / scaleFactor + spacing;

// snap *indices*, not positions
let startX = floor(minX / spacing) * spacing;
let endX   = floor(maxX / spacing) * spacing;
let startY = floor(minY / spacing) * spacing;
let endY   = floor(maxY / spacing) * spacing;

for (let x = startX; x <= endX; x += spacing) {
  for (let y = startY; y <= endY; y += spacing) {
    g.circle(x, y, r * 2);
  }
}
  g.noErase();
  g.pop();
}
function mousePressed() {
  dragging = true;
}

function mouseReleased() {
  dragging = false;
}

function mouseDragged() {
  if (dragging) {
    offsetX += movedX;
    offsetY += movedY;
  }
}

function mouseWheel(event) {
  depth += event.delta * -0.0001;
  depth = constrain(depth, 0.7, 1.5);
  return false;
}
