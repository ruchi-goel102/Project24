
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = createSprite(460, 660, 900, 5);
	ground.shapeColor = ("yellow");

	paper = new Paper(200, 450, 40);
    World.add(world,paper);

	

	dustbin = new Dustbin();
	World.add(world,dustbin);
	
	
	World.add(world,ground);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin.display();
  ground.display();
  paper.display();
  
  drawSprites();
 
}



