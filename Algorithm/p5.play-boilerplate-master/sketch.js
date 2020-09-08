var fo,mo;
var o1,o2,o3;



function setup() {
  createCanvas(1200,800);
  fo = createSprite(400, 200, 50, 50);
  mo = createSprite(200,200,80,30)
  fo.shapeColor="green"
  mo.shapeColor="red"
 // fo.velocityX=1
 // fo.velocityY=1
 o1 = createSprite(100,200,50,50)
 o2 = createSprite(200,200,50,50)
 o3 = createSprite(300,200,50,50)
 o1.shapeColor="purple"
 o2.shapeColor="pink"
 o3.shapeColor="blue"
 o2.velocityX=3
 o2.velocityY=3
}

function draw() {
  background(0,0,0);  
  mo.y=World.mouseY
  mo.x=World.mouseX
  
  if(istouching(mo,fo)){
    mo.shapeColor="green"
    fo.shapeColor="red"
    
  }
  else{
    fo.shapeColor="green"
    mo.shapeColor="red"
  }
  
 // bounceoff(mo,o2);
 drawSprites();
}
  
  
  
  
  
  
  
  
  
  
  
  
