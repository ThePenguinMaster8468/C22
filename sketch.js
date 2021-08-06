const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var con;
var ball2;
var con2;
var ball3;
var con3;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(200,70,15,ball_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(200,50,20,ball_options);
  World.add(world,ball3);

  
  
  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });

  con2 = Matter.Constraint.create({
    bodyA:ball,
    bodyB:ball2,
    length:100,
    stiffness:0.1
  })

  con3 = Matter.Constraint.create({
    bodyA:ball2,
    bodyB:ball3,
    length:100,
    stiffness:0.1
  })
  
      World.add(world,con);
      World.add(world,con2);
      World.add(world,con3);
      
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,15);
  ellipse(ball3.position.x,ball3.position.y,20);
  

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
  line(ball2.position.x,ball2.position.y,ball3.position.x,ball3.position.y);
  
  pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball3,{x:0,y:0},{x:-0.05,y:0});
    }
}

