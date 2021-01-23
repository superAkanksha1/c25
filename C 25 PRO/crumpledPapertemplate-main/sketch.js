
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, dustbin1, dustbinImg;
var paper1;
var world;

function preload(){

    dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(2000, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper1 = new paper(100,640);

	dustbin1 = createSprite(1200,550,180,220);
	dustbin1.addImage(dustbinImg);
	dustbin1.scale = 0.7;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-10});

}

stroke("black");
fill("yellow");
textSize(30);
text("please press up key and press right key when paper is just above dustbin", 500,100);

  groundObject.display();
  dustbinObj.display();
  paper1.display();

  drawSprites();
}
