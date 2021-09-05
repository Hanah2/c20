var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  
fixedRect = createSprite(0, 300, 50, 50);
fixedRect.shapeColor = "green";
fixedRect.velocityX = 5;

movingRect = createSprite(800, 300, 60, 30);
movingRect.shapeColor = "green";
movingRect.velocityX = -5;
}

function draw() {
  background("grey");
//   movingRect.x = World.mouseX;
//   movingRect.y = World.mouseY;
  
  
// if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
//   && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
//   && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
//   && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
//     movingRect.shapeColor = "red";
//   fixedRect.shapeColor = "red";

// }
// else{
//   movingRect.shapeColor = "green";
//   fixedRect.shapeColor = "green";
// }

if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
movingRect.velocityX = movingRect.velocityX*(-1)
fixedRect.velocityX = fixedRect.velocityX*(-1)
}



  drawSprites();
}