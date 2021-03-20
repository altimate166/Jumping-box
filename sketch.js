var canvas;
var music;
var box;
var s1;
var s2;
var s3;
var s4;
var wall1;
var wall2;
var wall3;
var wall4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(750,600);
    
    //create 4 different surfaces
  s1 = createSprite(95,585,160,20)
  s1.shapeColor = "blue";
  s2 = createSprite(280,585,160,20)
  s2.shapeColor = "yellow";
  s3 = createSprite(465,585,160,20)
  s3.shapeColor = "maroon";
  s4 = createSprite(655,585,160,20)
  s4.shapeColor = "darkgreen";
  wall1 = createSprite(350,2,800,10);
  wall1.visible = false;
  wall2 = createSprite(2,350,10,800)
  wall2.visible = false;
  
  wall4 = createSprite(748,400,10,800)
  wall4.visible = false;
    //create box sprite and give velocity
 box = createSprite(random(20,750));
 box.scale = 0.5;
 box.shapeColor = "white";
 box.velocityX = 7;
 box.velocityY = 7;
 
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   
    createEdgeSprites();
    music.play()
   box.bounceOff(wall1);
   box.bounceOff(wall2);
   bounceOff();
   box.bounceOff(wall4);
   box.bounceOff(s1);
    box.bounceOff(s2);
    box.bounceOff(s3);
    box.bounceOff(s4);
    //add condition to check if box touching surface and make it box
   
    drawSprites();
    
   
}
function bounceOff(){
    if(box.isTouching(s1) && box.bounceOff(s1)){
        box.shapeColor = "blue"
        
    }
    if(box.isTouching(s2) && box.bounceOff(s2)){
        box.shapeColor = rgb(255,128,0)
        box.velocityY= 0;
        box.velocityX= 0;
        music.stop();
    }
    if(box.isTouching(s3) && box.bounceOff(s3)){
        box.shapeColor = "maroon"
        
    }
    if(box.isTouching(s4) && box.bounceOff(s4)){
        box.shapeColor = "darkgreen"
        
    }
}