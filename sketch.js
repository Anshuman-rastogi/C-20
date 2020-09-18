var fixedRect, movingRect, block1, block2;

function setup() {
  createCanvas(800,400);
  
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(600,200,80,50);
  movingRect.shapeColor="green";
  block1=createSprite(200,15,50,60);
  block1.velocityY=5;
  block2=createSprite(200,375,50,60);
  block2.velocityY=-5;

}

function draw() {
  background(0); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
     fixedRect.shapeColor="red";
     movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  if(block1.x - block2.x < block1.width/2 + block2.width/2
    && block2.x - block1.x < block1.width/2 + block2.width/2){
      block1.velocityX=block1.velocityX*(-1);
      block2.velocityX=block2.velocityX*(-1);
    }

    if( block1.y - block2.y < block1.height/2 + block2.height/2
      &&  block2.y - block1.y < block1.height/2 + block2.height/2){
        block1.velocityY=block1.velocityY*(-1);
        block2.velocityY=block2.velocityY*(-1);
      }

  drawSprites();
}