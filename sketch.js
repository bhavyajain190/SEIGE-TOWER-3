const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var ground,slingshot;
var score = 0;
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  box1 = new Box(330,225,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390, 235,30,40);
  box4 = new Box(420,235,30,40);

  box5 = new Box(450,235,30,40);
  box6 = new Box(360,195,30,40);
  box7 = new Box(390, 195,30,40);
  box8 =  new Box(420,195,30,40);
  box9 =  new Box(390,155,30,40);
  ball =  new ball(200,200,30,30);
  slingshot = new Slingshot(ball.body,{x:200,y:100});
}

function draw() {
  background(255,255,255); 
    textSize(35)
    fill("white")
    text("Score  " + score, width-200, 100)
  Engine.update(engine);
  strokeWeight(4);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  slingshot.display();    
  

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();

  
  
   
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}