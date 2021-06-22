var boy,boy_img,boyleft_img,boyright_img;
var devil,devil_img;
var hell,hell_img;
var door,door_img;
var END =0;
var PLAY =1;

var gameState = PLAY;
var ghost,ghost_img;
var house,house_img;
var nun,nun_img;
var dragon,dragon_img;
var fireball,fireball_img,dragon1_img,dragon2_img,dragon3_img,dragon4_img,dragon5_img,dragon6_img,dragon7_img,dragon8_img;
var trophy,trophy_img;
var grudge,grudge_img;
var tv,tv_img;
var fireballgroup;
var trigger;
var scream;
var irritating;

function preload()
{
  boy_img=loadImage("images/boy.png");
  devil_img = loadAnimation("images/devil.jpg");
  hell_img = loadImage("images/hell.jpg");
  door_img = loadImage("images/door.jpg");
  ghost_img = loadImage("images/ghost.png");
  house_img = loadImage("images/house.jpg");
  nun_img = loadImage("images/nun.jpg");
  dragon_img = loadImage("images/dragon.png");
  fireball_img = loadImage("images/fireball.png");
  boyleft_img = loadImage("images/boyleft.png");
  boyright_img = loadImage("images/boyright.png");
  dragon1_img = loadImage("images/dragon1.png");
  dragon2_img = loadImage("images/dragon2.png");
  dragon3_img = loadImage("images/dragon3.png");
  dragon4_img = loadImage("images/dragon4.png");
  dragon5_img = loadImage("images/dragon5.png");
  dragon6_img = loadImage("images/dragon6.png");
  dragon7_img = loadImage("images/dragon7.png");
  dragon8_img = loadImage("images/dragon8.png");
  trophy_img = loadImage("images/trophy.png");
  grudge_img = loadImage("images/grudge.png");
  tv_img = loadImage("images/tv.jpg");
  scream=loadSound("images/scream.mp3");
  irritating=loadSound("images/irritating.mp3");
}

function setup() {
  createCanvas(1920,937);
       
  

  backgr=createSprite(1000,400,10,10);
  backgr.addImage(hell_img);
  backgr.scale = 1.2;
  backgr.visible = true;
  
  backgr1=createSprite(500,450,1920,937);
  backgr1.addImage(nun_img);
  backgr1.scale = 1.8;
  backgr1.visible = false;
 
  backgr2=createSprite(500,450,1920,937);
  backgr2.addImage(tv_img);
  backgr2.scale = 1.8;
  backgr2.visible = false;
  
  player = createSprite(50,50,10,10);
  player.addImage(boy_img);
  player.scale = 0.2;
  
  player.setCollider("circle",0,0,100)
  
  //ground = createSprite(400,350,800,10);
  //ground.x=ground.width/2;
  //ground.visible=false;

  dragon2 = createSprite(350,50);
  dragon2.addImage(dragon2_img);
  dragon2.velocityY = 8;
  dragon2.scale = 0.7;

  dragon4 = createSprite(700,50);
  dragon4.addImage(dragon4_img);
  dragon4.velocityY = 6;
  dragon4.scale = 0.7;


  dragon6 = createSprite(1050,50);
  dragon6.addImage(dragon6_img);
  dragon6.velocityY = 8;
  dragon6.scale = 0.7;

  dragon8 = createSprite(1400,50);
  dragon8.addImage(dragon8_img);
  dragon8.velocityY = 6;
  dragon8.scale = 0.7;

  



  line1 = createSprite(500,150,4000,10);
  line1.scale = 0.5;
  line1.shapeColor =rgb(247,190,13);

  line2 = createSprite(1300,350,4000,10);
  line2.scale = 0.5;
  line2.shapeColor = rgb(247,190,13);

  line3 = createSprite(500,550,4000,10);
  line3.scale = 0.5;
  line3.shapeColor = rgb(247,190,13);

  line4 = createSprite(1300,750,4000,10);
  line4.scale = 0.5;
  line4.shapeColor = rgb(247,190,13);

  line5 = createSprite(300,1,7000,10);
  line5.scale = 0.5;
  line5.shapeColor = rgb(247,190,13);

  line6 = createSprite(1300,930,4000,10);
  line6.scale = 0.5;
  line6.shapeColor = rgb(247,190,13);


  dragon = createSprite(100,650,10,10);
  dragon.addImage(dragon_img);
  dragon.scale = 0.5;

  
  trophy = createSprite(800,850,10,10);
  trophy.addImage(trophy_img);
  trophy.scale = 2;

  grudge = createSprite(1800,500,10,10);
  grudge.addImage(grudge_img);
  grudge.scale = 0.7;
  grudge.visible = false;

  trigger = createSprite(1000,500,10,10);
  trigger.scale = 0.7;
  trigger.visible = false;
  
  fireballgroup = new Group();
}

function draw() { 
  background(0);
 


  if(gameState===PLAY)
  {
  
 player.velocityX = 0;
 player.velocityY = 0
  
    if(keyDown(RIGHT_ARROW) ) {
      player.velocityX = 6;
      player.addImage(boyright_img);
      player.scale = 0.25
    }

    if(keyDown(LEFT_ARROW) ) {
      player.velocityX = -6;
      player.addImage(boyleft_img);
      player.scale = 0.25
    }

    if(keyDown(UP_ARROW) ) {
      player.velocityY = -6;
    }

    if(keyDown(DOWN_ARROW) ) {
      player.velocityY = 6;
    }

    if(dragon2.isTouching(line3)){
      dragon2.addImage(dragon1_img);
     }

     if(dragon2.isTouching(line5)){
      dragon2.addImage(dragon2_img);
     }

     if(dragon4.isTouching(line3)){
      dragon4.addImage(dragon3_img);
     }

     if(dragon4.isTouching(line5)){
      dragon4.addImage(dragon4_img);
     }

     if(dragon6.isTouching(line3)){
      dragon6.addImage(dragon5_img);
     }

     if(dragon6.isTouching(line5)){
      dragon6.addImage(dragon6_img);
     }

     if(dragon8.isTouching(line3)){
      dragon8.addImage(dragon7_img);
     }

     if(dragon8.isTouching(line5)){
      dragon8.addImage(dragon8_img);
     }

     spawnfireball();
    dragon8.bounceOff(line3);
    dragon2.bounceOff(line3);
    dragon4.bounceOff(line3);
    dragon6.bounceOff(line3);

    dragon8.bounceOff(line5);
    dragon2.bounceOff(line5);
    dragon6.bounceOff(line5);
    dragon4.bounceOff(line5);
  }
  

  if(player.isTouching(dragon8)){
    player.x = 50;
    player.y = 50;
  }

  if(player.isTouching(dragon2)){
    player.x = 50;
    player.y = 50;
  }

  if(player.isTouching(dragon6)){
    player.x = 50;
    player.y = 50;
  }

  if(player.isTouching(dragon4)){
    player.x = 50;
    player.y = 50;
  }

  if(player.isTouching(dragon4)){
    player.x = 50;
    player.y = 50;
  }

  if(player.isTouching(fireballgroup)){
    player.x = 50;
    player.y = 50;
  }

  if(player.isTouching(trophy)){
    gameState = END;
  }
  
  
  if(gameState===END)
  {
    dragon2.destroy();
    dragon4.destroy();
    dragon6.destroy();
    dragon8.destroy();
    dragon.destroy();
    trophy.destroy();
    fireball.destroy();
    line1.destroy();
    line2.destroy();
    line3.destroy();
    line4.destroy();
    line5.destroy();
    line6.destroy();
    
    
    grudge.visible = true;
    grudge.velocityX = -6;

    player.velocityX = 0;
    player.velocityY = -3;
    player.scale = 0.5;

    backgr.visible = false;
    backgr2.visible = true;
    

  

   

   if(grudge.isTouching(trigger)){
   grudge.velocityX = -40;
   
  }

   if(player.isTouching(grudge)){
     player.destroy();
     grudge.destroy();
    
    backgr2.destroy();
    backgr1.visible = true;

    
    
    scream.play();
    
  }
}

  

drawSprites();
}
function spawnfireball(){
if(frameCount % 100 ===0){
  fireball = createSprite(130,650,10,10);
  fireball.addImage(fireball_img);
  fireball.scale = 0.2;
  fireball.velocityX = 4;
  fireball.lifetime = 500;

  dragon.depth = fireball.depth;
  dragon.depth +=1;

  fireballgroup.add(fireball);


}
}