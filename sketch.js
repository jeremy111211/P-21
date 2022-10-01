
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball, right, left;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,690,800,20);
	right=new Ground(700,620,20,120);
	left=new Ground(550,620,20,120);

	var ballOptions = {
		isStatic:false,
		restitution:0,
		friction: 0,
		density: 1.2
	}
	
	ball=Bodies.circle(160,100,20,ballOptions);
	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.show();
  right.show();
  left.show();
 
ellipse(ball.position.x, ball.position.y, 20, 20);
}

function keyPressed(){
	if(
		keyCode===UP_ARROW
	){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:55,y:-60})
	}
}

