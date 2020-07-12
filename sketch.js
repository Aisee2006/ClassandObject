const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,box1,box2;


function setup()
{
    createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;
  ground=new Ground(200,380,400,20);  
  
box1=new Box(200,200,40,40);
box2=new Box(230,100,40,40);
}
function draw()
{
    background(50,60,70);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
}