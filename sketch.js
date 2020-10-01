const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, dropRect1, dropRect2, dropRect3;

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2, height-35, width,10);
	ground.shapeColor=color("yellow")

    dropRect1 = new Dustbin(1200, 650, 200,20);
	dropRect1.shapeColor=color("lightblue")

	dropRect2 = new Dustbin(1100, 610, 20,100);
	dropRect2.shapeColor=color("lightblue")

	dropRect3 = new Dustbin(1300, 610, 20,100);
	dropRect3.shapeColor=color("lightblue")

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, 50, 10 , {isStatic:true} );
	World.add(world, ground);

   
   dropRect1 = Bodies.rectangle(1200, 650, 200, 20 , {isStatic:true} );
   World.add(world, dropRect1);

   dropRect2 = Bodies.rectangle(1100, 610, 20,100 , {isStatic:true} );
   World.add(world, dropRect2);

   dropRect3 = Bodies.rectangle(1300, 610, 20,100 , {isStatic:true} );
   World.add(world, dropRect3);

   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



