var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var moon;
var building, building2, building3, building4, building5, building6, building7, building8;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	moon = createSprite(650, 50, 50, 50);
    moon.shapeColor = "lightgray"

	building2 = createSprite(600, 440, 200, 450);
    building2.shapeColor = "gray"
	
	building = createSprite(600, 560, 100, 200);
    building.shapeColor = "lightgray"

	building3 = createSprite(500, 490, 200, 350);
    building3.shapeColor = "darkgray"

	building4 = createSprite(330, 460, 200, 400);
    building4.shapeColor = "gray"	

	building5 = createSprite(100, 460, 200, 400);
    building5.shapeColor = "darkgray"

	building8 = createSprite(50, 400, 100, 540);
    building8.shapeColor = "lightgray"

	building6 = createSprite(250, 540, 100, 250);
    building6.shapeColor = "lightgray"

	building7 = createSprite(750, 540, 140, 260);
    building7.shapeColor = "darkgray"


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  drawSprites();
  
  
 
}

function keyPressed() {

	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(packageBody, false);
	}

	if(keyCode === RIGHT_ARROW){
		helicopterSprite.x = helicopterSprite.x + 20;
		Matter.Body.translate(packageBody, {x:+20, y:0});
	}

	if(keyCode === LEFT_ARROW){
		helicopterSprite.x = helicopterSprite.x - 20;
		Matter.Body.translate(packageBody, {x:-20, y:0});
	}
}
