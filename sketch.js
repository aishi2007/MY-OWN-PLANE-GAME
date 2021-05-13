var plane,plane1_img;
var plane2_img;
var bg;
var astroid,astroid_Img;
var astroidGroup;
var score=0;
var ground2;
function preload(){

  plane1_img=loadImage("Plane1.png")
  plane2_img=loadImage("Plane2.png")
  bg=loadImage("background.jpg")
  astroid_Img=loadImage("astroid.png")
}
function setup() {
  createCanvas(1200,400);
  ground2=createSprite(700,400/2+200,1500,20)
  ground2.velocityX=-4
  ground2.visible= false;

  ground=createSprite(700,400/2+200,1500,20)
  ground.velocityX=-4
  ground.visible= true;

  plane=createSprite(200, 400/2, 50, 50);
  plane.addImage(plane1_img);

  astroidGroup=new Group();

  score=0
}
500
function draw() {
  background(bg);  
    fill("black")
    textSize(20)
    text("Score: "+score,50,50)

  if (keyDown("space") && plane.y>= 156) {
    plane.velocityY = -10;
     }

     plane.velocityY = plane.velocityY + 0.8

     if (ground.x < 0) {
      ground.x = ground.width / 2;
    }

    if (frameCount % 100 === 0) {
      var astroid = createSprite(width+20,height-400,40,10);
      astroid.y = Math.round(random(height-300,height-100));
      astroid.addImage(astroid_Img);
      astroid.scale=0.3
      astroid.velocityX = -5;
      astroid.lifetime = width/3;
      astroidGroup.add(astroid)
    }

    if(plane.isTouching(astroidGroup)){
      reset(); 
    }

    if(plane.collide(ground2)){
      plane.addImage(plane2_img)
      push()
      fill("red")
      textSize(40)
      text("CRASH!!",600,200)
      pop();
      plane.forceStop()
      astroidGroup.setVelocityEach(0);
      astroidGroup.setLifetimeEach(-1)
    }
plane.collide(ground)
  drawSprites();
}

function reset(){
  
  astroidGroup.destroyEach();
  score=score+2;
}