const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var sling;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var base1;
var polygon;
var polygon_img;
var ground;
function preload()
{
	polygon_img=loadImage("polygon.png")
}


function setup() {
	
	createCanvas(900,400);

	
	engine = Engine.create();
	world = engine.world;
	
	base1=new Ground(450,300,250,10)
	ground=new Ground(450,395,900,10)

	
	box1=new Box(352,290,30,40)
	box2=new Box(382,290,30,40)
	box3=new Box(412,290,30,40)
	box4=new Box(442,290,30,40)
	box5=new Box(472,290,30,40)
	box6=new Box(502,290,30,40)
	box7=new Box(532,290,30,40)
	
	
	box8=new Box(382,260,30,40)
	box9=new Box(412,260,30,40)
	box10=new Box(442,260,30,40)
	box11=new Box(472,260,30,40)
	box12=new Box(502,260,30,40)
	
	box13=new Box(412,220,30,40)
	box14=new Box(442,220,30,40)
	box15=new Box(472,220,30,40)
	
	box16=new Box(442,180,30,40)

	polygon=Bodies.circle(50,200,20)
	World.add(world,polygon);
	sling=new Slingshot(this.polygon,{x:150,y:220})

	Engine.run(engine)

	
}


function draw() {
	background("cyan")
	Engine.update(engine)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  sling.display();
  base1.display();
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling.attach(polygon);
    }
}