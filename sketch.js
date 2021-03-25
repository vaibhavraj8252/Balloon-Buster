var bow,bow1,arrow;
var backGround,backGroundI;
var greenB,greenBI,blueB,blueBI,pinkB,pinkBI,redB,redBI;
var aG,blueG,redG,pinkG,greenG;
var score=0;


function preload(){
 //load your images here 
 bow1=loadImage("bow.png")
 backGroundI= loadImage("background.png");
 greenBI=loadImage("green_balloon0.png");
 blueBI=loadImage("blue_balloon0.png");
 pinkBI=loadImage("pink_balloon0.png");
 redBI=loadImage("red_balloon0.png");
 arrowI=loadImage("arrow0.png");
}

function setup() {
    background("white")
  createCanvas(600, 500);
  backGround=createSprite(0,0,20,20);
  backGround.addImage("backGround",backGroundI);
  backGround.scale=2.8;
  backGround.velocityX=-15
  bow=createSprite(460,200,30,50);
  bow.addImage("bow",bow1);
  aG=createGroup();
  blueG=createGroup();
  redG=createGroup();
  pinkG=createGroup();
  greenG=createGroup();
}

function draw() {
drawSprites();
  

   r=Math.round(random(1,4))
  switch(r){
    case gB():
      break
    case pB():
      break
    case bB():
      break
    case rB():
      break}
if(keyDown("space")){
    varrow();
    arrow.y=bow.y; 
   
  }
 bow.y=World.mouseY;
 if(backGround.x<0){
    backGround.x=200;  
  }

 
 if (aG.isTouching(blueB)) {
  blueB.destroy();
  aG.destroyEach();
   score=score+2;
}
      
  if (aG.isTouching(greenB)) {
  greenB.destroy();
  aG.destroyEach();
   score=score+2;
} 
 
 if(aG.isTouching(pinkB)){
   pinkB.destroy();
   aG.destroyEach();
   score=score+2;
 } 
      
 if (aG.isTouching(redB)) {
  redB.destroy();
  aG.destroyEach();
   score=score+2
}
      textFont("algerian")
      textSize(20)
    text("Score: "+ score, 500,50);
 
} 


function varrow(){
  arrow=createSprite(460,200,300,200)
  arrow.addImage("arrow",arrowI)
  arrow.scale=0.250;
   arrow.velocityX=-8;
  aG.add(arrow)
}

function gB(){
    if(frameCount%100==0){
   greenB=createSprite(0,random(20,480),10,30);
  greenB.addImage("greenB",greenBI);
  greenB.scale=0.12;
  greenB.velocityX=5
   greenB.lifetime=150;
    greenG.add(greenB)}
}

function bB(){
    if(frameCount%70==0){
   blueB=createSprite(0,random(20,480),10,30);
  blueB.addImage("blueB",blueBI);
  blueB.scale=0.130;
  blueB.velocityX=5
    blueB.lifetime=150
    blueG.add(blueB)}
}

function pB(){
    if(frameCount%99==0){
 pinkB=createSprite(0,random(20,480),10,30);
  pinkB.addImage("pinkB",pinkBI);
  pinkB.scale=1.7;
  pinkB.velocityX=5
    pinkB.lifetime=150
    pinkG.add(pinkB)}
}

function rB(){
    if(frameCount%80==0){
   redB=createSprite(0,random(20,480),10,30);
  redB.addImage("redB",redBI);
  redB.scale=0.14;
  redB.velocityX=5
    redB.lifetime=150
    redG.add(redB)}
}

