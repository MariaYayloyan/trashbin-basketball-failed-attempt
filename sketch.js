
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(50,600);
	dustbin1 = new Dustbin(300,610,20,100);
	dustbin2 = new Dustbin(500,610,20,100);
	dustbin3 = new Dustbin(400,650,200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);
  
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  keyPressed();

  drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		(Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85}));
	}
}



