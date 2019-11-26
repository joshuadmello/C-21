var gameObject1,gameObject2,gameObject3,gameObject4,movingrect;
function setup() {
  createCanvas(1200,800);
gameObject1 = createSprite(200, 200, 50, 50);
  movingrect = createSprite(400, 200, 80, 30);
  gameObject1.shapeColor = "green";
  movingrect.shapeColor = "green";
  gameObject2 = createSprite(400, 200, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(600, 200, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(800, 200, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(isTouching(movingrect,gameObject2)=== true) {
    movingrect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  } else{
    movingrect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }  
  drawSprites();
}
