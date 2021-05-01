var wall;
var car;
var speed;
var weight;
var deformation;
function setup() {
  createCanvas(800,400);
  speed= random(50,90);
  weight= random(400,1500);
  

  car= createSprite(50, 200, 35, 35);
 car.shapeColor = "green"
wall= createSprite(700, 200, 35, 200);
wall.shapeColor = "green";

}

function draw() {
  background(0);  
 car.velocityX=speed;

  //console.log(body1.x-movingRect.x);

if(collide(car,wall)){
car.velocityX=0;
deformation=(0.5*weight*speed*speed)/22500;
  if(deformation<=80){
    car.shapeColor="green"
  }
    if(deformation<=180&&deformation>80){
      car.shapeColor="yellow"
    }
      if(deformation>180){
        car.shapeColor="red"
      }



}
  drawSprites();
}

function collide(body1,body2){
  if(body1.x-body2.x<=body1.width/2+body2.width/2 && body2.x-body1.x<=body1.width/2+body2.width/2 &&
    body1.y-body2.y<=body1.height/2+body2.height/2 && body2.y-body1.y<=body1.height/2+body2.height/2){
  return true;
 }
 else{
  return false; 
 }}