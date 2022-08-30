let x = 50, y = 300;
let vx = 5, vy = 5;
let layer;

function setup() {
  createCanvas(document.body.offsetWidth - 100, document.body.offsetHeight - 100);

  // Define a cor padrão dos objetos que aparecerão no 'canvas'
  fill('#00ff00');

  // Cria um "outro canvas" abstrato (não como uma nova tag HTML)
  // As variáveis width e height se referem as dimensões do 'canvas' original que foi criado
  layer = createGraphics(width, height);
}

function draw() {
  // Apaga tudo que há no canvas e define uma cor de background
  background('#f0f0f0');

  let oldX = x;
  let oldY = y;

  circle(x, y, 50);

  // Próxima configuração do circulo
  x+= vx;
  y+= vy;

  if((x > width) || (x < 0)) {
    vx = -vx;
  }
  if((y > height) || (y < 0)) {
    vy = -vy;
  }

  // Desenha uma linha no layer (outro 'canvas')
  layer.line(oldX, oldY, x, y);
  // Faz a união do que aparece no layer com o que tem no canvas
  image(layer, 0, 0);
}