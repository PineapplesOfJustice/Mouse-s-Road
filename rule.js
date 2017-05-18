var namespace = "http://www.w3.org/2000/svg"
var level = 0;
var max = 11;
var attempt = 0;
var mouseX = true;
var mouseY = true; 
var mouse = true;
var screen = true;
var text1 = true;
var text2 = true;
var death = true;
var track = true;
var button = true;
var cheese = true;
var boy = true;
var boy1 = true;
var accio = true;
var platform1 = true;
var platform2 = true;
var platform3 = true;
var platform4 = true;
var platform5 = true;
var x = 1;
var y = 1;
var z = 1;
var a = 1;
var b = 1;
var d = 0;
var e = []
var keys = [];

////////////////////////////////////////////Level Selector////////////////////////////////////////////////
function iChooseYou(){
  var selector = document.getElementById("valuea").value;
  if(selector==""){
    selector=0;
  }
  x = 1;
  y = 1;
  z = 1;
  a = 1;
  b = 1;
  d = 1;
  if(level==5){
    time2();   
  }
  if(level==7){
    clock();
  }
  level = Number(selector);  
  startGame();
  stopAnimationFrame(platform);
}

////////////////////////////////////////////Initial////////////////////////////////////////////////
startGame();
startScreen();

////////////////////////////////////////////Mouse Movement////////////////////////////////////////////////
function moveMouse(){   
  var pt = canvas.createSVGPoint()
  pt.x = event.clientX
  pt.y = event.clientY
  var svgPt = pt.matrixTransform(canvas.getScreenCTM().inverse()) 
  mouseX = svgPt.x-8;
  mouseY = svgPt.y-15.5;
  mouse.setAttribute("x", mouseX);
  mouse.setAttribute("y", mouseY);
  if(level!=7){  
    if(collides(mouse, cheese)){
      endLevel();
    }
  }
  //For clock level
  if(level==7){  
    if(collides(mouse, cheese[1])){
      endGame();
    }  
    if(collides(mouse, cheese[2])){
      endGame();
    }  
    if(collides(mouse, cheese[3])){
      hallucinate();
      endGame();
    }  
    if(collides(mouse, cheese[4])){
      endGame();
    }  
    if(collides(mouse, cheese[5])){
      endGame();
    }  
    if(collides(mouse, cheese[6])){
      endLevel();
    }
  }
}

////////////////////////////////////////////Death Location////////////////////////////////////////////////
function xShape(){
  makeImage("https://img.clipartfest.com/14d203b6aca7377ec9c33486d52b1066_x-no-background-clipart-1-x-out-clipart-no-background_600-532.png",mouseX+6,mouseY+14,6,6)
}

////////////////////////////////////////////Level Content////////////////////////////////////////////////
function startGame(){
  attempt = 0;    
  death = makeRect(0,0,300,200,"#4A708B");
    
  //Tutorial//
  if(level==0){
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    makePolyline("50 50 80 90 140 70 80 150 140 180 250 80","yellow",15);
    makeCircle(58,60,8,"black");
    button = makeCircle(58,60,5,"red");
    button.addEventListener("click",startLevel);
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",233, 80, 15,15);
  }
    
  //Level 1//
  else if(level==1){
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    makeText("Got", 105, 80, 70,"Covered By Your Grace","yellow");
    makeText("Cheese?", 45, 140, 73,"Covered By Your Grace","yellow");      
    makeCircle(73,115,8,"black");
    button = makeCircle(73,115,5,"red");
    button.addEventListener("click",startLevel);
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",181, 32.5, 15,15);
    texto.innerHTML = "Got Cheese? How can a mouse crosss empty space? Wouldn't it be nice if there was a bridge...";
  }
    
  //Level 2//
  else if(level==2){
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    boy1 = makePolyline("163 11 95 88 123 88 95 128 123 128 86 188 168 105 141 105 164 68 137 68 162 13","yellow",11);
    text2 =  makeText("Flash",200,180,50,"Amatic SC","yellow");     
    boy = makeCircle(132, 100, 64, "none");
    boy.setAttribute("stroke-width", 9);
    boy.setAttribute("stroke", "yellow");
    boy1.setAttribute("stroke-linecap","butt");
    makeCircle(91,162,8,"black");
    button = makeCircle(91,162,5,"red");
    button.addEventListener("click",startLevel);
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",125, 18, 15,15); 
    texto.innerHTML = "Empty space or is it? Death will show you the way. Solve it in a flash and the you will be surprise by what you see.";
  }
    
  //Level 3//
  else if(level==3){
    b=1;  
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    makeRect(11,35,30,30, "yellow");
    makePolyline("40 50 100 50", "yellow", 15);
    makeRect(240,160,30,30, "yellow");
    makePolyline("255.5 162 255.5 110", "yellow", 15);
    //platforms
    platform1 = makeRect(98,35,30,30,"yellow");  
    platform2 = makeRect(98,105,30,30,"yellow");
    platform3 = makeRect(15,155,30,30,"yellow");
    platform4 = makeRect(190,132,30,30,"yellow");
    makeRect(10,170,15,15,"orange");
    //
    makeCircle(26,50,8,"black");
    button = makeCircle(26,50,5,"red");
    button.addEventListener("click",startLevel);
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",247, 167, 15,15); 
    texto.innerHTML = "Cross the bridge and good luck. Your journey will be frustrating.";
    platform();
  }
    
  //Level 4//
  else if(level==4){
    b=1; 
    d=1;  
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    makePolyline("222 64 58 47 57 154 225 173 228 97 116 93 118 127 174 134","yellow",13);
    makeCircle(210,63,8,"black");
    button = makeCircle(210,63,5,"red");
    button.addEventListener("click",startLevel);
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",153, 121, 16,16);
    platform5 = makeImage("https://img.clipartfest.com/53d5952f53019583fd8c5bfbc212b9cb_pink-mouse-clip-art-mouse-clipart-no-background_298-294.png", 200,87, 15, 15);
    texto.innerHTML = "Race. Race. Race! Beat Maggie with your maneuver speed! Just don't expect her to play fair!"; 
    stopAnimationFrame(platform);//Actually doesn't work! HoHoHo.
  }
    
  //Level 5//
  else if(level==5){
    b=0.4;
    d=0;
    platform1 = 3000;
    makePolyline("229 60 233 159 51 162 75 96 218 82","yellow",13)
    makePolyline("193 49 75 86","yellow",13)
    makePolyline("232 54 195 46","yellow",13)
    makeCircle(229,71.5,8,"black");
    makeCircle(229,71.5,5,"red");
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",196, 74, 16,16);
    texto.innerHTML = "Who turned off the light? It will be a dark and stormy night.";
    death = makeRect(0,0,300,200,"black");  
    x = makePolyline("229 60 233 159 51 162 75 96 218 82","black",13)
    y = makePolyline("193 49 75 86","black",13)
    z = makePolyline("232 54 195 46","black",13)
    a = makeCircle(229,71.5,8,"black");
    button = makeCircle(229,71.5,5,"red");
    button.addEventListener("click",startLevel);
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",196, 74, 16,16,0);  
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    time();  
  } 
    
  //Level 6//
  else if(level==6){
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    makeCircle(120,110,8,"black");
    button = makeCircle(120,110,5,"red");
    button.addEventListener("click",startLevel);
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",160, 80, 16,16);  
    texto.innerHTML = "Hey, there is no pathway! Well, build one!";
  } 
    
  //Level 7//
  else if(level==7){
    a=-1;
    b=1;
    d=1;  
    for(i=1;i<7;i++){
      e[i]=true;  
    }
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    //platforms
    platform3 = makePolyline("143 93 143 35","yellow",10);  
    platform1 = [];
    platform1[1] = makeRect(133,26,20,20,"yellow");
    platform1[2] = makeRect(186,58,20,20,"yellow");
      platform1[2].setAttribute("stroke","green");
      platform1[2].setAttribute("stroke-width",2);
    platform1[3] = makeRect(186,121,20,20,"yellow");
      platform1[3].setAttribute("stroke","purple");
      platform1[3].setAttribute("stroke-width",2);
      platform1[3].setAttribute("rx",5);
    platform1[4] = makeRect(133,144,20,20,"yellow");
      platform1[4].setAttribute("rx",5);
    platform1[5] = makeRect(80,58,20,20,"yellow");
      platform1[5].setAttribute("stroke","red");
      platform1[5].setAttribute("stroke-width",2);
    platform1[6] = makeRect(80,121,20,20,"yellow");
      platform1[6].setAttribute("stroke","blue");
      platform1[6].setAttribute("stroke-width",2);
      platform1[6].setAttribute("rx",5);
    makeCircle(143,93,16,"orange");
    //
    makeCircle(143,93,8,"black");
    button = makeCircle(143,93,5,"red");
    button.addEventListener("click",startLevel);
    cheese = []; 
    cheese[1] = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",136, 27, 15,15);
      cheese
    cheese[2] = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",188, 60, 15,15); 
    cheese[3] = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",188, 123, 15,15); 
    cheese[4] = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",135, 145, 15,15); 
    cheese[5] = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",82, 123, 15,15); 
    cheese[6] = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",82, 60, 15,15); 
    texto.innerHTML = "The Six Cheese:<br><li>One is drugged, one is safe, and the rest are poisoned.</li><li>Beware the circular square, for they will bring no good.</li><li>Special are the diagonals, but stay away from blue.</li><li>I wonder, how the purple will taste, and the red?</li>";
    clock();  
  }
    
  //Level 8//
  else if(level==8){
    a=1;  
      
      
    /////////////////////////  
      
      
      
    death = makePath("M169 4771 l-29 -29 0 -139 c0 -76 -5 -1087 -11 -2247 -8 -1601 -8 -2115 1 -2137 26 -62 -26 -59 1129 -59 l1051 0 0 100 0 100 -575 0 -575 0 0 115 0 115 1592 0 1592 0 33 36 33 37 0 286 c0 157 -3 343 -7 413 l-6 128 -94 0 -93 0 0 -323 0 -323 -28 -27 -28 -27 -1267 0 -1267 0 0 115 0 115 345 0 345 0 0 100 0 100 -560 0 -560 0 0 425 0 425 -100 0 -100 0 0 -480 c0 -326 3 -486 11 -502 6 -13 25 -34 42 -48 31 -25 32 -25 204 -22 l173 4 0 -116 0 -116 -320 0 -320 0 0 135 0 135 -100 0 -100 0 0 -197 c0 -109 4 -203 8 -208 4 -6 22 -23 40 -38 33 -27 35 -27 183 -27 l149 0 0 -115 0 -115 -321 0 -321 0 6 1098 c3 603 9 1557 12 2120 l6 1022 599 0 599 0 0 -95 0 -95 -245 0 -245 0 0 -100 0 -100 605 0 605 0 0 100 0 100 -260 0 -260 0 0 95 0 95 1419 0 1419 0 6 -482 c3 -266 7 -653 9 -860 l3 -378 -93 0 -93 0 0 420 0 420 -100 0 -100 0 0 -505 0 -505 -120 0 -120 0 0 265 0 265 -98 0 -99 0 -6 -557 c-4 -306 -7 -661 -7 -790 l0 -233 -110 0 -110 0 0 330 0 330 -100 0 -100 0 0 -345 0 -345 -850 0 c-467 0 -853 -1 -857 -2 -5 -2 -9 176 -11 395 l-2 397 110 0 110 0 0 -242 c0 -241 0 -243 24 -273 l24 -30 221 -3 221 -3 30 30 c50 50 36 122 -30 156 -21 11 -63 15 -160 15 l-130 0 0 423 c0 316 3 426 12 435 9 9 123 12 450 12 l438 0 -2 -442 -3 -443 -141 -5 c-155 -6 -181 -14 -204 -69 -15 -38 -7 -75 25 -107 24 -24 25 -24 249 -24 l225 0 25 33 26 34 0 581 c0 319 -3 588 -6 597 -17 44 -30 45 -647 45 l-585 0 -31 -35 -31 -36 0 -224 0 -225 -105 0 -105 0 0 365 0 365 860 0 860 0 2 -362 3 -363 98 -3 97 -3 0 432 0 431 -34 34 -34 34 -441 0 -441 0 0 115 0 115 585 0 585 0 0 -120 0 -120 97 0 96 0 -7 335 -7 335 115 0 c63 0 121 -3 130 -6 13 -5 16 -23 16 -95 l0 -89 100 0 100 0 0 148 c0 161 5 143 -61 220 l-19 22 -885 0 -885 0 0 -100 0 -100 590 0 590 0 0 -115 0 -115 -1334 0 -1334 0 -36 -40 -36 -40 0 -245 0 -245 100 0 100 0 2 183 3 182 598 3 597 2 0 -115 0 -115 -458 0 -458 0 -27 -28 -27 -28 0 -302 0 -302 -115 0 -115 0 0 108 0 109 -142 6 c-79 4 -174 7 -212 7 l-69 0 6 650 6 650 -29 15 c-46 24 -101 19 -143 -12 l-36 -28 -1 -1517 0 -1518 84 0 c46 0 91 3 100 6 14 6 16 84 16 780 l0 774 112 0 111 0 -6 -275 -5 -275 104 0 104 0 0 160 0 160 110 0 110 0 0 -595 0 -595 29 -32 29 -33 1000 -3 c882 -2 1002 0 1015 13 12 12 42 15 141 15 l126 0 0 -93 c0 -89 -1 -94 -28 -120 l-28 -27 -547 0 -547 0 0 -101 0 -102 645 5 c644 5 646 5 661 26 8 11 21 28 29 36 13 13 15 111 15 720 l0 706 125 0 125 0 0 -360 0 -360 100 0 100 0 0 445 0 445 93 0 94 0 7 -927 c5 -511 11 -1020 15 -1133 3 -113 5 -217 3 -232 l-3 -28 -1005 0 -1004 0 0 -100 0 -100 1078 0 1077 0 28 40 28 39 -21 2258 -20 2258 -26 23 -25 22 -2265 0 -2266 0 -29 -29z","yellow");  
      death.setAttribute("transform", "translate(73,178) scale(0.03,-0.03)");
      
      
      
    /////////////////////////  
      
      
      
    makeCircle(229,71.5,8,"black");
    button = makeCircle(229,71.5,5,"red");
    button.addEventListener("click",startLevel);
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",139, 95, 16,16);  
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    texto.innerHTML = "A narrow path for a narrow mouse. Don't worry, the floor is safe. I can't guarentee that for the walls though!";
  }
    
  //Level 9//
  else if(level==9){
    b=1;
    d=1;  
    c=1;
    a=1;  
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    makePolyline("90 50      120 160     150 100     180 160    210 50    ","yellow",13);
    makeCircle(92,59,8,"black");
    button = makeCircle(92,59,5,"red");
    button.addEventListener("click",startLevel);
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",199, 50, 16,16);
    platform5 = makeImage("https://img.clipartfest.com/53d5952f53019583fd8c5bfbc212b9cb_pink-mouse-clip-art-mouse-clipart-no-background_298-294.png", 88,68, 15, 15);
    texto.innerHTML = "Rematch! Can you best Maggie once again?";
  }
    
  //Level 10//
  else if(level==10){
    b=0;
    a=1;  
    e[1] = platform5 = makeRect(80,100,30,30,"orange");  
    document.addEventListener('keyup',function(event){keys[event.keyCode]=false});  
    document.addEventListener("keydown",function(event){keys[event.keyCode]=true;}); 
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    e[2] = makeRect(45,45,36,48,"yellow");
    e[3] = makeRect(226,73,30,30,"yellow");  
    makeCircle(58,60,8,"black");
    button = makeCircle(58,60,5,"red");
    button.addEventListener("click",startLevel);                    
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",233, 80, 15,15);
    mouse = makeImage("https://img.clipartfest.com/1b742d0aa54afc97a54f90d24c61fd2d_mouse-clip-art-photos-maus-clipart-bilder_282-300.png", 59,66, 15, 15);
    texto.innerHTML = "Finale! Control the platform with WASD, I will be moving the mouse this time around!";
    loopHole();  
  }
    
  //Level 11 and after//
  else{
    a=1;
    b=1;  
    c=1;  
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    makeText("The", 120, 60, 50,"Covered By Your Grace","yellow");
    makeText("Lost Levels", 35, 115, 55,"Covered By Your Grace","yellow");
    //
    platform1 = makeRect(137,117,26,26,"yellow");     
    platform1.addEventListener("mouseenter",function(){
      c=1;
      b=0;
    });
    platform1.addEventListener("mouseleave",b=1); 
    platform2 = makeRect(140,170,20,20,"orange"); 
    platform2.addEventListener("click",appear);  
    //
    makeCircle(130,75,8,"black");
    button = makeCircle(130,75,5,"red");
    button.addEventListener("click",startLevel);
    texto.innerHTML = "Error, Level Not Found. Congrat on beating the game though!";
    lostPlatforms();
  }
}
//End of Level Content

////////////Special Function///////////////

//Level 3//
function platform(){ 
  p1Y = getY(platform1);
  p2X = getX(platform2);
  p3X = getX(platform3);
  p4X = getX(platform4);
  p4Y = getY(platform4);
  if(p1Y < 100 && y==1){    
    move(platform1,0,0.4);
  }
  else if(p1Y >= 100){
    y=-1;
    move(platform1,0,-0.4);  
  }
  else if(p1Y > 35 && y==-1){    
    move(platform1,0,-0.4);
  }
  else if(p1Y <= 35){
    y=1;  
    move(platform1,0,0.4);
  }
  if(p2X > 10 && x==1){    
    move(platform2,-0.4,0.224);
  }
  else if(p2X <= 10){
    x=-1;
    move(platform2,0.4,-0.224);  
  }
  else if(p2X < 98 && x==-1){    
    move(platform2,0.4,-0.224);
  }
  else if(p2X >= 98){
    x=1;  
    move(platform2,-0.4,0.224);
  }
  if(p3X < 190 && z==1){    
    move(platform3,0.4,0); 
  }
  else if(p3X >= 190){
    z=-1;
    move(platform3,-0.4,0);  
  }
  else if(p3X > 15 && z==-1){    
    move(platform3,-0.4,0);
  }
  else if(p3X <= 15){
    z=1;  
    move(platform3,0.4,0);
  }
  if(p4Y > 85 && a==1){ //(190, 132)   
    move(platform4,0,-0.4); 
  }
  else if(p4Y <= 85 && a==1){//(190, 185)
    a=2;
    move(platform4,0.4,0);  
  }
  else if(p4X <240 && a==2){//(240, 185)    
    move(platform4,0.4,0);
  }
  else if(p4X >= 240 && a==2){
    a=3;  
    move(platform4,-0.4,0);
  }
  else if(p4X >190 && a==3){  //(190, 132)  
    move(platform4,-0.4,0);
  }
  else if(p4X <= 190 && a==3){
    a=4;  
    move(platform4,0,0.4);
  } 
  else if(p4Y < 150 && a==4){ //(190, 132)    
    move(platform4,0,0.4); 
  }
  else if(p4Y >= 150 && a==4){
    a=1;
    move(platform4,-0.4,0);  
  }
  requestAnimationFrame(platform);    
}

//Level 4//
function mice(){
  var p5X = getX(platform5);
  var p5Y = getY(platform5);
  if(b==1){
    move(platform5,-0.3,-0.01);
    b=2;
  }
  else if(p5X > 107 && b==2){
    move(platform5,-0.3,-0.01);
  }
    else if(p5X <= 107 && b==2){
    move(platform5,0.01,0.3);
    b=3;
  }
  else if(p5Y < 117 && b==3){
    move(platform5,0.008,0.3);
  }
  else if(p5Y >= 117 && b==3){
    move(platform5,0.3,0.05);
    b=4;
  }    
  else if(p5X < 140 && b==4){
    move(platform5,0.3,0.05);
  }
  else if(p5X >= 140 && b==4){
      b=1;
      setX(platform5,200);
      setY(platform5,87);
      endGame();
      d=0;
  }
  if(d==1){  
    requestAnimationFrame(mice);
  }
}

//Level 5//
function time(){
  setTimeout(function(){
    death.setAttribute("opacity",b);
    x.setAttribute("opacity",b);
    y.setAttribute("opacity",b);
    z.setAttribute("opacity",b);
    a.setAttribute("opacity",b);
    time2();
  }, platform1);
}

function time2(){
  setTimeout(function(){
    death.setAttribute("opacity",1);
    x.setAttribute("opacity",1);
    y.setAttribute("opacity",1);
    z.setAttribute("opacity",1);
    a.setAttribute("opacity",1);
    b = Math.random()/4;
    platfrom1 = Math.random()*3000;
    if(d==0){  
      time();
    }
  }, 500);      
}

//Level 7//
function hallucinate(){
  for(i=1;i<7;i++){
    var t = Math.random();
    if(t<.167 && e[1]){
      platform1[i].setAttribute("rx",0);
      platform1[i].setAttribute("stroke-width",1);
      platform1[i].setAttribute("stroke","none");  
      e[1] = false;
    }
    else if(t<.334 && e[2]){
      platform1[i].setAttribute("rx",0);
      platform1[i].setAttribute("stroke-width",2);
      platform1[i].setAttribute("stroke","green");
      e[2] = false;  
    }
    else if(t<.5 && e[3]){
      platform1[i].setAttribute("rx",5);
      platform1[i].setAttribute("stroke-width",2);
      platform1[i].setAttribute("stroke","purple");
      e[3] = false;  
    }
    else if(t<.667 && e[4]){
      platform1[i].setAttribute("rx",5);
      platform1[i].setAttribute("stroke-width",1);
      platform1[i].setAttribute("stroke","none");
      e[4] = false;  
    }
    else if(t<.884 && e[5]){
      platform1[i].setAttribute("rx",0);
      platform1[i].setAttribute("stroke-width",2);
      platform1[i].setAttribute("stroke","red");
      e[5] = false;  
    }
    else if(t<=1 && e[6]){
      platform1[i].setAttribute("rx",5);
      platform1[i].setAttribute("stroke-width",2);
      platform1[i].setAttribute("stroke","blue");
      e[6] = false;  
    }
    else{
      i=i-1;  
    }
  }
  d=d+1;  
}

function clock(){
  b=b+0.5*d;
  platform3.setAttribute("transform", "rotate("+b+ " 143 93)");
  if(a==-1){
    setTimeout(clock, 50);  
  }
}

//Level 9//
function miceReturn(){
  var p5X = getX(platform5);
  var p5Y = getY(platform5);
  if(b==1){
    move(platform5,0.64,2.4);
    b=2;
  }
  else if(p5Y < 151 && b==2){
    move(platform5,0.64,2.4);
  }
  else if(p5Y >= 151 && b==2){
    move(platform5,1.2,-2.4);
    b=3;
  }
  else if(p5X < 140 && b==3){
    move(platform5,1.2,-2.4);
  }
  else if(p5X >= 140 && b==3){
    move(platform5,1.2,2.4);
    b=4;
  }   
  else if(p5Y < 152 && b==4){
    move(platform5,1.2,2.4);
  }
  else if(p5Y >= 152 && b==4){
    move(platform5,0.8,-3);
    b=5;
  }    
  else if(p5Y > 60 && b==5){
    move(platform5,0.8,-3);
  }
  else if(p5Y <= 60 && b==5){
      b=1;
      setX(platform5,88);
      setY(platform5,68);
      endGame();
      d=0;
  }
  if(d==1){  
    requestAnimationFrame(miceReturn);
  }    
}

//Level 10//
function mouseTion(){
  mouseX = getX(mouse);
  mouseY = getY(mouse);
  c=2;  
  if(mouseY<81 && a==1){
    move(mouse,0.375,0.5);    
  }  
  else if(mouseY>=81 && a==1){
    move(mouse,0.5,-0.167);    
    a=2;  
  }  
  else if(mouseX<125 && a==2){
    move(mouse,0.5,-0.167);    
  }  
  else if(mouseX>=125 && a==2){
    move(mouse,-0.33,0.5);
    a=3;  
  } 
  else if(mouseY<142 && a==3){
    move(mouse,-0.33,0.5);    
  }  
  else if(mouseY>=142 && a==3){
    move(mouse,0.5,0.25);
    a=4;  
  } 
  else if(mouseX<127 && a==4){
    move(mouse,0.5,0.25);    
  }  
  else if(mouseX>=127 && a==4){
    move(mouse,0.6,-0.5);
    a=5;  
  }
  else if(mouseY>100 && a==5){
    move(mouse,0.6,-0.5);    
  }  
  else if(mouseY<=100 && a==5){
    move(mouse,-0.6,0.5);
    a=6;  
  }
  else if(mouseY<130 && a==6){
    move(mouse,-0.6,0.5);    
  }  
  else if(mouseY>=130 && a==6){
    move(mouse,0.6,-0.5);
    a=7;  
  }
  else if(mouseY>85 && a==7){
    move(mouse,0.6,-0.5);    
  }  
  else if(mouseY<=85 && a==7){
    endLevel();
  }
  for(i=1;i<4;i++){
    if(collides(mouse,e[i])){
      c=1;  
    }
  }
  if(c==2){
    endGame();  
  }
  if(b==0){
    requestAnimationFrame(mouseTion);  
  }
}

function loopHole(){
  var x = getX(platform5);
  var y = getY(platform5);  
  if(keys[87] && y>3){
    move(platform5,0,-0.8);
  }
  else if(keys[83] && y<176){
    move(platform5,0,0.8);  
  }
  if(keys[65] && x>3){
    move(platform5,-0.8,0);
  }
  else if(keys[68] && x<276){
    move(platform5,0.8,0);  
  }
  if(b!=2){
    setTimeout(loopHole,15)  
  }
}

//Level 11 and After//
function appear(){
  cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",142, 173, 15,15);
}

function lostPlatforms(){
  var p1X = getX(platform1);
  var p1Y = getY(platform1);    
  if(p1Y<155 && a==1){
    move(platform1,0,0.3)
  }
  else if(p1Y>=155 && a==1){
    a=2;  
    move(platform1,0,-0.3)
  }
  else if(p1Y>120 && a==2){  
    move(platform1,0,-0.3)
  }
  else if(p1Y<=120 && a==2){
    a=1;  
    move(platform1,0,0.3)
  }
  if(b==1){  
    if(p1X<137){
      move(platform1,0.5,0);    
    }
    else if(p1X>137){
      move(platform1,-0.5,0);    
    }
  }
  else if(b==0){  
    if(p1X>120 && c==1){
      move(platform1,-0.4,0)
    }
    else if(p1X<=120 && c==1){
      c=2;  
      move(platform1,0.4,0)
    }   
    else if(p1X<157 && c==2){
      move(platform1,0.4,0)
    }
    else if(p1Y>=157 && c==2){
      c=1;  
      move(platform1,-0.4,0)
    }
  }
  if(b!=2){  
    requestAnimationFrame(lostPlatforms);
  }
}
//End of Special Functions

//When Button is Clicked
function startLevel(){
//Level Specific
  if(level==2){
  boy.setAttribute("stroke","#4A708B");
  boy1.setAttribute("stroke","#4A708B");
  text2.setAttribute("fill", "#4A708B");
  }
  if(level==4 && b==1){
    d=1;
    mice();
  }
  if(level==9 && b==1){
    d=1;  
    miceReturn();  
  }
  if(level==10){
    a=1;
    b=0;  
    mouseTion();  
  }
//End
  attempt = attempt+1;
  if(attempt==1){
    accio.innerHTML = "Attempt: "+attempt;
  }
  else{
    accio.innerHTML = "Attempts: "+attempt;
  }
  if(level!=10){  
    var pt = canvas.createSVGPoint()
    pt.x = event.clientX
    pt.y = event.clientY
    var svgPt = pt.matrixTransform(canvas.getScreenCTM().inverse()) 
    mouseX = svgPt.x-8;
    mouseY = svgPt.y-15.5;
    mouse = makeImage("https://img.clipartfest.com/1b742d0aa54afc97a54f90d24c61fd2d_mouse-clip-art-photos-maus-clipart-bilder_282-300.png", mouseX, mouseY, 15, 15);
    canvas.addEventListener('mousemove', moveMouse);    
  }
  mouse.setAttribute("opacity",1);
  death.addEventListener('mouseover',endGame);
  button.setAttribute("fill","#FF8C00");
  button.removeEventListener("click",startLevel);
  canvas.setAttribute("cursor","pointer");
}

//Reach the Cheese Successfully
function endLevel(){
//Level Specific
  if(level==2){
    boy.setAttribute("stroke","yellow");
    boy1.setAttribute("stroke","yellow");
    text2.setAttribute("fill","yellow");  
  }
//End
  d=1;
  if(level==5){  
    time2();  
  }
  b=2;  
  level = level+1;
  button.setAttribute("fill","green");
  canvas.setAttribute("cursor","auto");
  canvas.removeEventListener('mousemove', moveMouse);
  death.removeEventListener('mouseover',endGame);
  screen = makeRect(0,0,300,200,"black",0.3);
  text1 =  makeText("Cleared!",82,90,50,"Covered By Your Grace","white");  
  boy1 = makeRect(120, 110, 60, 20, "black");
  boy1.setAttribute("rx",6);
  boy = makeRect(121, 111, 58, 18, "white");
  boy.setAttribute("rx",6);
  boy.setAttribute("cursor","pointer");
  boy.addEventListener('click', startGame);
  text2 = makeText("continue",128, 123, 13,"Indie Flower","black");
  text2.setAttribute("cursor","pointer");
  text2.addEventListener('click', startGame);
}

//Hover Over the Abyss(Death)
function endGame(){
  mouse.setAttribute("display","none");
  button.setAttribute("fill","red");
  canvas.setAttribute("cursor","auto");
  canvas.removeEventListener('mousemove', moveMouse);
  death.removeEventListener('mouseover',endGame);
  button.addEventListener("click",startLevel);
  if(level>=max-1){
    b=1;     
  }
  if(level<max){  
    xShape();
  }
  if(level==10){
    mouse = makeImage("https://img.clipartfest.com/1b742d0aa54afc97a54f90d24c61fd2d_mouse-clip-art-photos-maus-clipart-bilder_282-300.png", 59,66, 15, 15); 
  }
}

//Intro(Ready?)
function startScreen(){
  makeRect(0,0,300,200,"black",0.6);
  boy1 = makeRect(98, 68, 104, 34, "black");
  boy1.setAttribute("rx",6);
  boy = makeRect(101, 71, 98, 28, "white");
  boy.setAttribute("rx",6);
  boy.setAttribute("cursor","pointer");
  boy.addEventListener('click', startGame);
  text2 = makeText(". Ready? .",115, 91, 20,"Satisfy","black");
  text2.setAttribute("cursor","pointer");
  text2.addEventListener('click', startGame);
}

//////////////////////////////////Ms. Squire's Codes///////////////////////////////////////

function getX(shape) {
  if (shape.hasAttribute("x")) {
    return parseFloat(shape.getAttribute("x"))
  } else {
    return parseFloat(shape.getAttribute("cx"))
  }  
}

function getY(shape) {
  if (shape.hasAttribute("y")) {
    return parseFloat(shape.getAttribute("y"))
  } else {
    return parseFloat(shape.getAttribute("cy"))
  }  
}

function setX(shape, x) {
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else {
    shape.setAttribute("cx", x)
  } 
}

function setY(shape, y) {
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else {
    shape.setAttribute("cy", y)
  } 
}

function move(shape, dx, dy) {
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function makePath(points, fill, opacity) {
  var path = document.createElementNS(namespace, "path")
  path.setAttribute("d", points)
  path.setAttribute("opacity", opacity)
  path.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(path)
  return path
}

function collides(rect1, rect2) {
  var centerX = getX(rect1) + parseFloat(rect1.getAttribute("width"))/2
  var centerY = getY(rect1) + parseFloat(rect1.getAttribute("height"))/2
  return (centerX > getX(rect2) && 
          centerX < getX(rect2) + parseFloat(rect2.getAttribute("width")) &&
         centerY > getY(rect2) &&
         centerY < getY(rect2) + parseFloat(rect2.getAttribute("height")))
}
