function setup() {
    createCanvas(700, 500);
     background(color(890,0,0));
    cor = color(random(0,275), random(0,295), random(0,245));
    posicaoHorizontal = 200;
    posicaoVertical = 200;
  }
  
  
  function draw() {
   
    fill(cor);
    circle(posicaoHorizontal,posicaoVertical,70);
   
   
   
    if (mouseX < posicaoHorizontal){
      posicaoHorizontal =  posicaoHorizontal - 1;
    }
   
    if (mouseX > posicaoHorizontal){
      posicaoHorizontal =  posicaoHorizontal + 1;
    }
   
    if (mouseY < posicaoVertical){
      posicaoVertical--;
    }
     
    if (mouseY > posicaoVertical){
      posicaoVertical++;
    }
   
    if (mouseIsPressed){
      cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
    }
     
  }