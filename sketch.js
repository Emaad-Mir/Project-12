var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaves,orangeLeaves
var appleImg,leavesImg,orangeLeavesImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
  orangeLeavesImg = loadImage("orangeLeaf.png");
  

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples(){
  if(frameCount%80==0){
  apple = createSprite(random(40,350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.velocityY = 2;
  apple.lifetime=150;
  apple.depth = rabbit.depth;
  rabbit.depth = rabbit.depth+1;
  }

}
  


function createLeaves(){
  if(frameCount%60==0){
  leaves = createSprite(random(30,350),200, 50, 10);
  leaves.addImage(leavesImg);
  leaves.scale = 0.07;
  leaves.velocityY = 5;
  leaves.lifetime=30;
  leaves.depth = rabbit.depth;
  rabbit.depth = rabbit.depth+1;
  }
}

function createOrangeLeaves(){
  if(frameCount%55==0){
    orangeLeaves = createSprite(random(10,350),100,20,10);
    orangeLeaves.addImage(orangeLeavesImg);
    orangeLeaves.scale = 0.09;
    orangeLeaves.velocityY = 4;
    orangeLeaves.lifetime=70;
    orangeLeaves.depth = rabbit.depth;
    rabbit.depth = rabbit.depth+1;
  }
}

function draw() {
  background(0);

  edges= createEdgeSprites();

  rabbit.collide(edges);

  rabbit.x = World.mouseX
  
  createApples();
  createLeaves();
  createOrangeLeaves();
  drawSprites();
}