


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Box1,Box2,Box3,bin,binimg,paperimg;

function preload()
{
	binimg=loadImage("bin.png");

	
}

function setup() {
	createCanvas(800,800);

	bin = createSprite(650,550,30,30)
	bin.addImage(binimg)
	bin.scale = 0.9


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ground = new Ground(400,670,800,20);
paperball = new paperBall(30,350,25);



Box1 = Bodies.rectangle(650 , 650 , 200 ,20, {isStatic:true});

	World.add(world,Box1);

   

	Box2 = Bodies.rectangle(750,600,15 ,300, {isStatic:true,visible:true});
	World.add(world,Box2);

	Box3 = Bodies.rectangle(550,600,15,300, {isStatic:true});
	World.add(world,Box3);



	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  Engine.update(engine);
  rectMode(CENTER);

  rect(Box1.position.x,Box1.position.y,200,20);
  rect(Box2.position.x,Box2.position.y,15,300);
  rect(Box3.position.x,Box3.position.y,15,300);


  ground.display();
paperball.display();


drawSprites();
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(paperball.body,paperball.body.position,{x:100,y:-150});

}
}






