function preload() {
  // put preload code here
}
var colorList = ['#1470CC', '#3D6B99', '#00FFF8', '#FF673F', '#CC2014','#4CFF65'];

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  var index = floor(random() * colorList.length);
  var colorHex = colorList[index];
  if (random() < 0.1) {

  background(color(colorHex));} else{
    if(random()<0.5){
    background(0,0,0);
  }else{ background(255,255,255);}}

    for (var x = 0; x < windowWidth; x += 50) {
      for (var y = 0; y < windowHeight; y += 50) {
        if (random() < 0.5) {
          //  for(var x2=50; x2<800; x2+=50){
          noStroke();
          fill(color(colorHex));

        } else {
          fill(color(colorHex));
          triangle(x, y, x + 50, y, x + 50, y + 50);
          triangle(x, y, x - 50, y, x - 50, y - 50);
        }
      }
    }
  }


  function draw() {
    // put drawing code here
    textSize(40);
text('REFRESH ', 10, 30);
fill('#267F33');
text('To make the pattern ',10,70);
fill('#267F33');
text('As one color',10,110);
fill('#267F33');

  }
