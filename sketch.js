var box



function setup() {
  createCanvas(650,637);
  box=createSprite(200,200,80,80);
}




function draw() 
{
  background("black");
  
if(keyIsDown(RIGHT_ARROW)) {
box.position.x=box.position.x+5;
}

if(keyIsDown(LEFT_ARROW)) {
  box.position.x=box.position.x-5;
}



  drawSprites();
}





