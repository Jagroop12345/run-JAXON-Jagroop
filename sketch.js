var run, runanimation
var bg, bgImage
function preload(){
  //pre-load images
runanimation = loadAnimation("Runner-1.png","Runner-2.png")
bgImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  bg = createSprite(200,400)
  bg.addImage("bg",bgImage)
  bg.velocityY= 5
  run = createSprite(200,350)
  run.addAnimation("run",runanimation)
  run.scale=0.07
  
  
}

function draw() {
background(225)
drawSprites();
text(mouseX + "," + mouseY, mouseX, mouseY);
  textSize(20);
  if (bg.y > 500) {
    bg.y = bg.height / 600;
  }
}
