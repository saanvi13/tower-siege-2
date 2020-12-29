const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var myEngine, myWorld;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21, block22;

var ground1, ground2, ground3;

var chain,hexagon,polygon;

function preload(){
   hexagon=loadImage("polygon.png");
} 

function setup(){
  createCanvas(1200,600);
 
  myEngine = Engine.create();
  myWorld = myEngine.world;

  block1 = new Block(600, 260);
  block2 = new Block(570, 260);
  block3 = new Block(540, 260);
  block4 = new Block(630, 260);
  block5 = new Block(660, 260);

  block6 = new Block(585, 220);
  block7 = new Block(555, 220);
  block8 = new Block(615, 220);
  block9 = new Block(645, 220);

  bolck10 = new Block(600, 170);
  block11 = new Block(570, 180);
  block12 = new Block(630, 180);

  block13 = new Block(600, 140);

  block14 = new Block(900, 170);
  block15 = new Block(930, 170);
  block16 = new Block(870, 170);
  block17 = new Block(840, 170);
  block18 = new Block(960, 170);


  block19 = new Block(900, 140);
  block20 = new Block(930, 140);
  block21 = new Block(870, 140);
  block22 = new Block(900, 110);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900, 195, 200, 10);
  ground3 = new Ground(750, 600, 1500, 20);

  polygon = Bodies.circle(50,200,20);
  World.add(myWorld,polygon);

  chain = new Slingshot(this.polygon,{x:100,y:200});

}

function draw(){
    background(0);

    Engine.update(myEngine);

    push();
    fill("yellow")
    stroke("red");
    strokeWeight(4);
    textSize(30);
    text("Drag the hexagon and launch it towards the tower blocks and destroy them", 80, 50);
    text("Press space to get a Second Chance",350,400);
    pop();

  fill("#87CEEA");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("#FFC0CB");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("#3FE0CF");
  bolck10.display();
  block11.display();
  block12.display();

  fill("#807F80");
  block13.display();

  fill("#87CEEA");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("#FFC0CB");
  block19.display();
  block20.display();
  block21.display();

  fill("#3FE0D0");
  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  scale(1);
  image(hexagon,polygon.position.x,polygon.position.y,40,40);

  chain.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    chain.fly();
  }
  
  function keyPressed(){
    if(keyCode===32){
      chain.attach(polygon);
    }
  }