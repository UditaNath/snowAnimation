const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowBG;
var fox,bear,snowman;
var snowmanImg,foxImg1,foxImg2,bearImg,christmasTreeImg;
var snow=[];

function preload(){
  snowBG=loadImage("snow03.jpg");

  foxImg1=loadImage("fox.png");
  
  bearImg=loadImage("bear.png")
  snowmanImg=loadImage("snowman.png")
  christmasTreeImg=loadImage("christmas tree.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  snowman=createSprite(165,300,50,50);
  snowman.addImage(snowmanImg);
  snowman.scale=0.2;

  invisibleGround = createSprite(400,300,800,10);
  invisibleGround.visible=false;

  christmasTree= createSprite(650,150,200,200);
  christmasTree.addImage(christmasTreeImg);
  christmasTree.scale=0.14;

  fox=createSprite(600,220,50,50);
  fox.addImage(foxImg1);
  fox.scale=0.08;

}

function draw() {
  background(snowBG); 
  Engine.update(engine);

  if(frameCount%10==0){
    snow.push(new Snow(random(0,800),0));
    
  }

  for(var i=0; i<snow.length; i++){
    snow[i].display();
  }
    
  fox.velocityX=-2;
  
  //console.log(mouseX,mouseY);
  if(fox.x<270 ){
    fox.velocityX=null;   
  }

  if(frameCount%60==0) {        
    fox.velocityY = -12; 
    fox.velocityX=0;
  }
  
  fox.velocityY = fox.velocityY + 0.8
  
  fox.collide(invisibleGround);
  

  
  drawSprites();
}


  
