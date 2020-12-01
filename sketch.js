
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var Score,SurvivalTime;
var ground;
var invisbleground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600); 
 Score=0;
  SurvivalTime=0;
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving ",monkey_running);
  monkey.scale=0.1;
  
  

  
  
  
  ground=createSprite(400,350,1000,10);
  ground.velocityX=-4;
  
  console.log(ground.x);
  
  
  
  

  
  
  

}


function draw() {
  background("white");
       
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  
  
  if(keyDown("space")){
  monkey.velocityY=-10; 
     
     }
  monkey.velocitY=monkey.velocityY+0.5;
  monkey.collide(ground);
  Spawnfood();
  Spawnobstacles();
    
  
  stroke("blue");
  textSize(20);
  fill("white");
  text("Score"+Score,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survial=Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+SurvivalTime,100,50);
  
   
   
  
  
  
  
  
  
  
  
  drawSprites();
  
}

function Spawnfood(){
  if(frameCount % 30===0){
  banana=createSprite(600,200,10,30);
  banana.velocityX=-(6+Score/100);
  banana.addImage(bananaImage);
   banana.scale=0.1; 
  }
  
}
function Spawnobstacles(){
  
  
  
   if (frameCount % 100 === 0){
   var obstacle = createSprite(600,310,10,40);
   obstacle.velocityX = -(6 + Score/100);
   obstacle.scale=0.2;
    //generate random obstacles
    var rand = Math.round(random(0,1));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImage);
              break;
    
      default: break;
    }
  
  
  
  
  
   } 
  
  
  
}



