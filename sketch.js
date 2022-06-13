var box;
function setup() {
  createCanvas(400,400);
box = createSprite (40,30,50,50)
}

function draw() 
{
  background(50);
drawSprites();

if (keyDown(UP_ARROW)) {
  box.y = box.y -2;
  background ("red");
}

if (keyDown(DOWN_ARROW)){
box.y = box.y +2;
}

if (keyDown(RIGHT_ARROW)) {
box.x = box.x +2;
}

if (keyDown(LEFT_ARROW)){
box.x = box.x -2;
}
}







