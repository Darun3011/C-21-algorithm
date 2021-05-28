var fixedRect, movingRect;

var fixedRect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect2 = createSprite(500, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
     
     movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  
  }else if(isTouching(movingRect,fixedRect2)){
           
     movingRect.shapeColor = "red";
    fixedRect2.shapeColor = "red";
    
           }
  
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
  }
     
     
  drawSprites();
}

  