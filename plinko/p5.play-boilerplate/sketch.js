const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var divisions = [];

var divisionHeight=300;



function setup() {
  createCanvas(480,800);
  

  engine = Engine.create();
  world = engine.world;
  
 ground= new Ground(240,610,500,10);

 /*division1= new Division(240,480,10,250);
 division2= new Division(330,480,10,250);
 division3= new Division(420,480,10,250);
 division4= new Division(150,480,10,250);
 division5= new Division(40,480,10,250);*/

  
  
  Engine.run(engine);
}

function draw() {
  background(0);  
  drawSprites();

  for (var i = 50; i <400; i=i+80) 
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));

{

  

}


  /*ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();*/

}