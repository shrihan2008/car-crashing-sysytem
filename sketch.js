var car
var wall
var speed
var weight
var deformation
function setup()
{
  speed=random(60,90)
  weight=random(400,1500)

  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed

  wall=createSprite(1500,200,60,height/2)
  deformation=(0.5*weight*speed*speed)/2250
}

function draw() {
  background("blue");  
  if(car.x-wall.x<car.width/2+wall.width/2&&wall.x-car.x<car.width/2+wall.width/2&&deformation<100)
  {
    car.shapeColor="green"

  }

  if(car.x-wall.x<car.width/2+wall.width/2&&wall.x-car.x<car.width/2+wall.width/2&&deformation>100)
  {
    car.shapeColor="red"

  }

  if(car.x-wall.x<car.width/2+wall.width/2&&wall.x-car.x<car.width/2+wall.width/2&&deformation>100&&deformation<180)
  {
    car.shapeColor="orange"

  }
  
  drawSprites();
}