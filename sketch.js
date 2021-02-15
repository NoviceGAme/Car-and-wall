var  rect1 , rect2;
var box;



function setup() {
  createCanvas(800,400);
   rect1 = createSprite (400, 200, 50, 50);
   
   rect2 = createSprite (200,200,50,50)

   box = createSprite (300,300,50,50)
}

function draw() {
  background(255,255,255);  

  rect1.x=mouseX
  rect1.y=mouseY

  if(isTouching(rect1,box)){
rect1.shapeColor="cyan"
box.shapeColor = "blue"
  }

  else{
    rect1.shapeColor="red"
   box.shapeColor = "green"


  }
  drawSprites();
}

