var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImg

var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6
var obstacle
var score = 0


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImg = loadImage ("cloud.png")
  obstacle1 = loadImage ("obstacle1.png")
  obstacle2 = loadImage ("obstacle2.png")
  obstacle3 = loadImage ("obstacle3.png")
  obstacle4 = loadImage ("obstacle4.png")
  obstacle5 = loadImage ("obstacle5.png")
  obstacle6 = loadImage ("obstacle6.png")
}

function setup() {

  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crie sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //gerar números aleatórios
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //definir cor do plano de fundo
  background(255);
  
  text ("pontuação: " + score, 50, 50)
  score = score + Math.round (frameCount/60);
  
  
  // pulando o trex ao pressionar a tecla de espaço
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 1
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);
  
  //Gerar Nuvens
  spawnClouds()
  spawnObstacle()
  drawSprites();
}

//função para gerar as nuvens
function spawnClouds(){
 //escreva seu código aqui
if (frameCount %60 == 0) {
  cloud = createSprite (600,100,40,10)
  cloud.scale = 0.5
  cloud.y = Math.round (random (10, 80))
  cloud.velocityX = -3
  cloud.addImage (cloudImg)
  cloud.depth = trex.depth
  trex.depth = trex.depth +1
  cloud.lifetime = 200;
}

}

function spawnObstacle () {
  if (frameCount %60 == 0) {
    obstacle = createSprite (600,165,10,40)
  obstacle.velocityX = -6;
  var numero = Math.round (random(1,6));
  switch (numero) {
  case 1:
    obstacle.addImage (obstacle1);
    break;
    case 2:
    obstacle.addImage (obstacle2);
    break;
    case 3:
    obstacle.addImage (obstacle3);
    break;
    case 4:
    obstacle.addImage (obstacle4);
    break;
    case 5:
    obstacle.addImage (obstacle5);
    break;
    case 6:
    obstacle.addImage (obstacle6);
    break;
    default: break;
  }
  obstacle.scale = 0.6
  obstacle.lifetime = 200;
  }
}

