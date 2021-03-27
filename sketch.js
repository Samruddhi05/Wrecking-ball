const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint 

var engine , world , box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9 , box10;
var box11 , box12 , box13 , box14 ,box15, ground , ball ;

function setup(){
    var canvas = createCanvas (1200 , 800)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600 , 600 , 1200 , 20);

    box1 = new Box (900,100,70,70)
    box2 = new Box (900,170,70, 70)
    box3 = new Box (900 , 240 , 70,70)
    box4 = new Box (900 , 310 , 70,70)
    box5 = new Box (900,380 , 70,70)
    box6 = new Box (830 , 100,70,70)
    box7 = new Box (830, 170,70,70)
    box8 = new Box (830,240,70,70)
    box9 = new Box (830,310,70,70)
    box10 = new Box (830,380,70,70)
    box11 = new Box (760 , 100,70,70)
    box12 = new Box (760 , 170,70,70)
    box13 = new Box (760 , 240,70,70)
    box14 = new Box (760 , 310,70,70)
    box15 = new Box (760 , 380,70,70)

    ball = new Ball (200,200,80,80);

    rope = new Slingshot (ball.body , {x :450 , y:50 })
}

function draw(){
background (200)

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

ground.display();

ball.display();

rope.display();
}

function mouseDragged (){
    Matter.Body.setPosition(ball.body, {x:mouseX , y:mouseY});
}

