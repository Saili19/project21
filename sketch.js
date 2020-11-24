var bullet, wall;
var speed, weight,thickness;
var  bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1600,400);

  speed= random(223,321);
  weight= random(30, 52);
  bullet = createSprite(50,200,70,40);
   
  wall= createSprite(1200 ,200,thickness ,height/2);
  

  bullet.velocityX= speed;
  thickness = random(22,83);

}

function draw() {
  background(0); 
  //bullet.shapeColor = colour("white");
  //wall.shapeColor = colour(80,80,80);

   if(hasCollided(bullet, wall)){
     bullet.velocityX =0;
     var damage = 0.5* speed* speed/(thickness* thickness* thickness);

     if(damage>10){
       wall.shapeColor = color(255,0,0);

     }
     if(damage<10){
       wall.shapeColor = color(0,255,0);
     }
       }
    
bullet.collide(wall);

  drawSprites();
}
function hasCollided(lbullet, lwall){
  bulletRightEdge= lbullet.x + lwall.width;
  wallLeftEdge= wall.x;
  if(bulletRightEdge>= wallLeftEdge ){
    return true;
  }
  return false;
}