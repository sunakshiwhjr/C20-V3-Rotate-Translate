
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let myEngine;
let myWorld;

var wedge, ball;
var angle = 0

function setup()
{
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {
    isStatic: true
  }

  var ball_options = {

    restitution: 0.9,
    frictionAir: 0.01

  }

  wedge = Bodies.rectangle(100, 200, 100, 20, options);
  World.add(myWorld, wedge);

  ground = Bodies.rectangle(200, 390, 400, 20, options);
  World.add(myWorld, ground);
 

  ball = Bodies.circle(70, 10, 10, ball_options);
  World.add(myWorld, ball);
}

function draw() 
{
  background(51);

  Engine.update(myEngine);

  //Rotate the physics body in the memory and also without this the ball physics body won't hit the wedge
  Body.rotate(wedge, angle)

  push();
  angle = angle + 0.09;
  rectMode(CENTER);
  translate(wedge.position.x, wedge.position.y);
  //physical & visually rotate
  rotate(angle);
  rect(0, 0, 100, 20);
  pop();


  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 10);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
}

