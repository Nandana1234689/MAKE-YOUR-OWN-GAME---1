var gamestate = "play" 
var gamestate = "end" 
var gamestate = "restart"
var score =0
function preload() {
pl = loadImage("images/p-l.png")
pr = loadImage("images/p-r.png")
t1 = loadImage("images/t2.png")
t2= loadImage("images/t1.png")
fi = loadImage("images/fire.png")
gi = loadImage("images/gameover.png")
bombImg = loadImage("images/bomb.png")
wallImg = loadImage("images/wall.png")
wall1Img = loadImage("images/wall2.png")
wall2Img = loadImage("images/wall1.png")
wall3Img = loadImage("images/wall3.png")
basinImg = loadImage("images/washbasin.png")
tableImg = loadImage("images/table.png")
sofaImg = loadImage("images/sofa.png")
table3Img = loadImage("images/table3.png")
tvImg = loadImage("images/tv.png")
bedImg =loadImage("images/bed.png")
table2Img = loadImage("images/table2.png")
kitcheImg = loadImage("images/kitchen.png")
bathroomImg = loadImage("images/bathroom.png")
potImg = loadImage("images/pot.png")
wonImg = loadImage("images/won.png")
ni = loadImage("images/notice.png")
}
function setup() {
  
  createCanvas(1366,657)



police = createSprite(150,350,50,50)
police.addImage(pr)
police.scale=0.7

thief = createSprite(1140,550,50,50)
thief .addImage(t1)
thief .scale=0.5

wall = createSprite(780,328,10,950)
wall.addImage(wallImg)
wall.scale = 0.6

wall1 = createSprite(1030,400,50,50)
wall1.addImage(wall1Img)
wall1.scale=0.7

wall2 = createSprite(730,430,50,50)
wall2.addImage(wall3Img)
wall2.scale=0.5

wall3 = createSprite(570,580,10,50)
wall3.addImage(wall2Img)
wall3.scale=0.7

basin = createSprite(290,60,20,20)
basin.addImage(basinImg)
basin.scale=0.3

table = createSprite(550,150,50,50)
table.addImage(tableImg)
table.scale=0.5

sofa = createSprite(950,160,50,50)
sofa.addImage(sofaImg)
sofa.scale=0.6

table3 = createSprite(1040,200,50,50)
table3.addImage(table3Img)
table3.scale=0.5

tv =createSprite(1250,140,50,50)
tv.addImage(tvImg)
tv.scale=0.7

bed=createSprite(1020,560,50,50)
bed.addImage(bedImg)
bed.scale=0.6

table = createSprite(850,450,50,50)
table.addImage(table2Img)
table.scale=0.2

kitchen = createSprite(380,540,50,50)
kitchen.addImage(kitcheImg)
kitchen.scale=0.6

bathroom = createSprite(1240,560,50,50)
bathroom.addImage(bathroomImg)
bathroom.scale=0.4

pot = createSprite(830,50,50,50)
pot.addImage(potImg)
pot.scale=0.4

notice = createSprite(680,300,20,50)
notice . addImage(ni)
notice.scale=0.5

bg = createGroup ()  

}

function draw() {
  background("white");
  if (keyCode == 115){
    notice.visible=false
    gamestate = "play"
  }

if(gamestate == "play"){

  if(keyDown(LEFT_ARROW)&& police.y > 10) {
    police.velocityY = 3;

}


  if(keyDown(LEFT_ARROW)){
   police.velocityX=-2;
 police.velocityY=0;
 police.addImage(pl)
 police.scale = 0.7
}
else if(keyDown(RIGHT_ARROW)){    
  police.velocityX=3;
       police .velocityY=0;
       police .addImage(pr)
        police.scale = 0.7
} 
else if(keyDown(UP_ARROW)){   
       police.velocityX = 0;
       police.velocityY = -2;
       police.scale = 0.7
}
else if(keyDown(DOWN_ARROW)){
       police .velocityX=0;
       police.velocityY=3;
      police .scale = 0.7
}

if(police.isTouching(thief)){
thief.addImage(t2)
won = createSprite(650,385,50,50)
won.addImage(wonImg)
gamestate="restart"

}

if(bg.isTouching(police)){

police.addImage(fi)
police.scale=0.1
gamestate="end"
}

bomb()


}
   
  if(gamestate == "end" ){
  
                       police.velocityX=0;
                        police.velocityY=0;
                        bg.destroyEach()
                        over = createSprite(650,385,50,50)
                        over.addImage(gi)
                        

}

if(gamestate == "restart" ){
  police.velocityX=0;
   police.velocityY=0;
   bg.destroyEach()


}


drawSprites()

}

function bomb() {
  if (frameCount % 100 === 0) {
    var a=random(1300,200)
    var b = random(250,600)
    bom = createSprite(a,b,40,10);
   bom.addImage(bombImg )
   bom.x = Math.round(random(250,1300))
   bom.scale = 0.05
   bom.velocityY = 1
   bom.lifetime=250
    bg.add(bom)


    }
}

