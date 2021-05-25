const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snow
var particles=[]

function preload(){
  snow = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  
  Engine.run(engine)
}

function draw() {
  background(snow);  

  if(frameCount % 10 === 0){
    var px= Math.round(random(50,750))
    particle=new Snow (px,0,10)
    particles.push(particle)
  }
  //display the paricles 
  for (var l = 0; l < particles.length; l++) {
    particles[l].display();
  }
}