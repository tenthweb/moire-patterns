let layerA, layerB;

function setup() {
  createCanvas(600, 400);
  layerA = createGraphics(width, height);
  layerB = createGraphics(width, height);

  makeLayer(layerA, 200, 200, 150);
  makeLayer(layerB, 300, 200, 150);
}

function makeLayer(g, x, y, r) {
  g.clear();
  g.background(0);
  g.erase();
  g.circle(x, y, r * 2);
  g.noErase();
}

function draw() {
  background(255);
  blendMode(MULTIPLY);
  image(layerA, 0, 0);
  image(layerB, 0, 0);
  blendMode(BLEND);
}
