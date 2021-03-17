const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1= new mango(1100,100,30);
	mango2= new mango(1150, 170, 30) 
	mango3= new mango(1200, 150, 30) 
	mango4= new mango(1170, 120, 30) 
	mango5= new mango(1000, 100, 30) 
	mango6= new mango(1200,200,30)
	mango7= new mango(1000,250,30)
	mango8= new mango(1000,170,30)
	mango9= new mango(950,220,30)
	mango10= new mango(1090,190,30)
	mango11= new mango(900,200,30)
  mango12= new mango(1080,50,30)
	treeObj= new tree(1050,580);
  stoneObj = new stone(200,340,37);
	groundObject=new ground(width/2,600,width,20);
	
  launcherObject = new launcher(stoneObj.body,{x:235, y:420});
	Engine.run(engine);
}

function draw() {

  background(230);
  //Add code for displaying text here!
  textSize(22)
  fill("black");
  text("Press the space bar to get another chance!", 50,50);
  image(boy,200,340,200,300);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();
  groundObject.display();
  launcherObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);
  detectCollision(stoneObj,mango12);

}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
  launcherObject.fly();
}

function keyPressed(){
    if (keyCode === 32){

  Matter.body.setPosition(stoneObj.body, {x:235, y:420})
  launcherObject.attach(stoneObj.body);
}
}

function detectCollision(lstone, lmango){

  stoneBodyPosition = lstone.body.position
  mangoBodyPosition = lmango.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

if (distance<=lmango.r+ lstone.r){
  Matter.body.setStatic(lmango.body,false)
}
}

