const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var ground

var particles;
var plinkos = []
var divisions = []

var gameState = "PLAY"
var score = 0
var count = 0

var divisionHeight = 500

function setup() {
  createCanvas(900, 1000);
  engine = Engine.create()
  world = engine.world;

  ground = new Ground(450,990,width)

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight))
  }

  for (var j = 60; j <= width; j += 70) {
    plinkos.push(new Plinkos(j, 75))
  }

  for (var j = 35;j <= width; j+=70){
    plinkos.push(new Plinkos(j,175))
  }

  for (var j = 60;j <= width; j += 70){
    plinkos.push(new Plinkos(j,275))
  }

  for (var j = 35; j <= width; j +=70){
    plinkos.push(new Plinkos(j,375))
  }

}

function draw() {
  background("black");
  Engine.update(engine)
  ground.display();

  for(var k = 0;k < divisions.length;k++){
    divisions[k].display();
  }

  for (var j=0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  
  if (particles!==null){
    particles.display()
    if (particles.body.position.y>760){
        if (particles.body.position.x>300){
            score+=500
            particles = null
            if (count>=5){
              gameState = "END"
            }

  textSize(30)
  text("Score: "+score,20,30)
  text("500",25,790)
  text("500",105,790)
  text("500",190,790)
  text("500",270,790)
  text("100",350,790)
  text("100",430,790)
  text("100",510,790)
  text("200",590,790)
  text("200",670,790)
  text("200",750,790)
  text("500",830,790)
}

function mousePressed(){
  if (gameState !=="END"){
    count++
    particles = new Particles(mouseX,10,10,10)
      }
    }
    }
  }
}
