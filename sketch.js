var start, startImg, startB, startBImg;
var fill, fillImg, fillB, fillBImg;
var input1, input2, input1V, input2V; 
var inst, instImg, instB, instBImg;
var room, roomImg;
var timer = 10;
var index = 0;
var score = 0;
var i = 0;

var gameState = "start";

function preload(){

  startImg = loadImage("start.jpg");
  startBImg = loadImage("startB.jpg");
  fillImg = loadImage("fill.jpg");
  fillBImg = loadImage("fillB.jpg");
  instImg = loadImage("inst.jpg");
  instBImg = loadImage("instB.jpg");
  roomImg = loadImage("room.jpg");
  jungle = loadImage("jungle.jpg");
  boy = loadImage("boy.png");
  girl = loadImage("girl.png");

  f1 = loadImage("1.png");
  f2 = loadImage("2.png");
  f3 = loadImage("3.png");

  bImg = loadImage("basket.png");

  disclaimerImg = loadImage("disclaimer.png");

  mini = loadImage("mini.jpg");

  gstringImg = loadImage("string.png");

  endImg = loadImage("end.jpg");

}
function setup() {
  createCanvas(1000, 600);

    start = createSprite(500,300,1000,600);
    start.addImage(startImg);
    start.visible = true;
   
    startB = createSprite(500,450,70,100);
    startB.addImage(startBImg);
    startB.visible = true;

    fillf = createSprite(500,300,1000,600);
    fillf.addImage(fillImg);
    fillf.visible = false;
   
    fillB = createSprite(500,550,70,100);
    fillB.addImage(fillBImg);
    fillB.visible = false;

    input1 = createInput("");
    input1.position(700,350);
    input1.hide();

    input2 = createInput("");
    input2.position(700,450);
    input2.hide();

    inst = createSprite(500,300,900,600);
    inst.addImage(instImg);
    inst.scale = 0.9;
    inst.visible = false;
   
    instB = createSprite(800,550,70,100);
    instB.addImage(instBImg);
    instB.visible = false;

    room = createSprite(500,300,900,600);
    room.addImage(roomImg);
    room.scale = 0.9;
    room.visible = false;

    character = createSprite(500,450,900,600);
    character.scale = 0.8;
    character.visible = false;

    basket = createSprite(450,500,900,600);
    basket.addImage(bImg);
    basket.visible = false;

    disclaimer = createSprite(500,50,800,10);
    disclaimer.addImage(disclaimerImg);
    disclaimer.visible = false;
  
    flowerGroup = new Group();

    gstring = createSprite(500,350,800,10);
    gstring.addImage(gstringImg);
    gstring.scale = 0.4;
    gstring.visible = false;

    fl1 = createSprite(300,550,20,20);
    fl1.addImage(f3);
    fl1.scale = 0.1;
    fl1.visible = false;

    fl2 = createSprite(300,550,20,20);
    fl2.addImage(f3);
    fl2.scale = 0.1;
    fl2.visible = false;

    fl3 = createSprite(360,550,20,20);
    fl3.addImage(f3);
    fl3.scale = 0.1;
    fl3.visible = false;

    fl4 = createSprite(420,550,20,20);
    fl4.addImage(f3);
    fl4.scale = 0.1;
    fl4.visible = false;

    fl5 = createSprite(480,550,20,20);
    fl5.addImage(f3);
    fl5.scale = 0.1;
    fl5.visible = false;

    fl6 = createSprite(540,550,20,20);
    fl6.addImage(f3);
    fl6.scale = 0.1;
    fl6.visible = false;

    fl7 = createSprite(600,550,20,20);
    fl7.addImage(f3);
    fl7.scale = 0.1;
    fl7.visible = false;

    fl8 = createSprite(660,550,20,20);
    fl8.addImage(f3);
    fl8.scale = 0.1;
    fl8.visible = false;

    fl9 = createSprite(720,550,20,20);
    fl9.addImage(f3);
    fl9.scale = 0.1;
    fl9.visible = false;

    end = createSprite(500,300,1000,600);
    end.addImage(endImg);
    end.visible = false;

}

function draw() {
  background(255);

  if(gameState === "start"){

    if(mousePressedOver(startB)){
      startState(); 
    }

    if(mousePressedOver(fillB)){
      input1V = input1.value();
      input2V = input2.value();
      instState(); 
    }

    if(mousePressedOver(instB)){
      playState(); 
    }

  }

  drawSprites();

  if(gameState === "realPlay"){

      console.log(score);
       
      disclaimer.visible = true;

      room.addImage(jungle);
      room.scale = 1.7;

      if(input2V === "M"){
        character.addImage(boy);
      }else{
        character.addImage(girl);
      }
      basket.visible = true;
      character.visible = true;

      flowers();
      
      basket.x = character.x;
      basket.y = character.y + 50;

      if(keyWentDown(LEFT_ARROW)){
        character.velocityX = -5;                          
      }
      if(keyWentDown(RIGHT_ARROW)){
        character.velocityX = 5;                                  
      }
      if(keyWentUp(LEFT_ARROW)){
        character.velocityX = 0;                          
      }
      if(keyWentUp(RIGHT_ARROW)){
        character.velocityX = 0;                                  
      }

      if(flowerGroup.isTouching(basket)){
        score = score + 1;
        flowerGroup.destroyEach();
    }

    if(score >= 9){
      gameState = "surprise";
    }

    drawSprites();

    fill(153,0,153);
    textSize(30);
    text("Flowers Collected: " + score, 700, 200);

  }

  if(gameState === "surprise"){

    room.addImage(mini);
    room.scale = 0.9;

    character.visible = true;
    character.x = 120;
    character.y = 360;
    basket.visible = false;
    disclaimer.visible = false;

    gstring.visible = true;

    fl1.visible = true;
    fl2.visible = true;
    fl3.visible = true;
    fl4.visible = true;
    fl5.visible = true;
    fl6.visible = true;
    fl7.visible = true;
    fl8.visible = true;
    fl9.visible = true;

    if(mousePressedOver(fl1)){
      fl1.x = 480;
      fl1.y = 240;
      i+=1; 
    }
    if(mousePressedOver(fl2)){
      fl2.x = 440;
      fl2.y = 295; 
      i+=1;
    }
    if(mousePressedOver(fl3)){
      fl3.x = 420;
      fl3.y = 365; 
      i+=1;
    }
    if(mousePressedOver(fl4)){
      fl4.x = 440;
      fl4.y = 435; 
      i+=1;
    }
    if(mousePressedOver(fl5)){
      fl5.x = 490;
      fl5.y = 470;
      i+=1; 
    }
    if(mousePressedOver(fl6)){
      fl6.x = 540;
      fl6.y = 435; 
      i+=1;
    }
    if(mousePressedOver(fl7)){
      fl7.x = 560;
      fl7.y = 365; 
      i+=1;
    }
    if(mousePressedOver(fl8)){
      fl8.x = 560;
      fl8.y = 295; 
      i+=1;
    }
    if(mousePressedOver(fl9)){
      fl9.x = 540;
      fl9.y = 240; 
      i+=1;
    }

    if(i >= 9){
      gameState = "end";
    }


    drawSprites();

  }

  if(gameState === "end"){
    end.visible = true;

    room.visible = false;
    gstring.visible = false;
    character.visible = false;
    fl1.visible = false;
    fl2.visible = false;
    fl3.visible = false;
    fl4.visible = false;
    fl5.visible = false;
    fl6.visible = false;
    fl7.visible = false;
    fl8.visible = false;
    fl9.visible = false;
  }

  if(gameState === "play"){

    index = index + 1;


    if(index === 1){
      setInterval(timeIt, 1000);
    }

    if(timer <=1){
      gameState = "realPlay";
    }

    fill(241, 209, 69);
    textSize(60);
    text("Welcome " + input1V + " !!", 250, 200);
    text("The Game Starts in " + timer + " seconds.", 50, 300);
    text("Loading....", 350, 450);
  }

}
function startState(){

  start.visible = false;
  startB.visible = false;

  fillf.visible = true;
  fillB.visible = true;

  input1.show();
  input2.show();
}

function instState(){

  fillf.visible = false;
  fillB.visible = false;

  input1.hide();
  input2.hide();

  inst.visible = true;
  instB.visible = true;

}

function playState(){

  inst.visible = false;
  instB.visible = false;

  room.visible = true;

  gameState = "play";

}

function timeIt(){
  timer--;
} 

function flowers(){
  if (frameCount % 20 === 0) {
    flower = createSprite(random(100, 1000), 0, 100, 100);
    flower.velocityY = 6;
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: flower.addImage(f1);
      break;
      case 2: flower.addImage(f2);
      break;
      case 3: flower.addImage(f3);
      break;
      
    }
    flower.scale = 0.1;
    flowerGroup.add(flower);
    
}
}




