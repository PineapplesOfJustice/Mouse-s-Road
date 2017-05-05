var namespace = "http://www.w3.org/2000/svg"
var level = 7;
var max = 6;
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
  level = Number(selector);  
  startGame();
  stopAnimationFrame(platform);
}
//<initial>
startGame();
startScreen();
//</initial>

function moveMouse(){
  var pt = canvas.createSVGPoint()
  pt.x = event.clientX
  pt.y = event.clientY
  var svgPt = pt.matrixTransform(canvas.getScreenCTM().inverse()) 
  mouseX = svgPt.x-8;
  mouseY = svgPt.y-15.5;
  mouse.setAttribute("x", mouseX);
  mouse.setAttribute("y", mouseY);
  if(collides(mouse, cheese)){
    endLevel();
  }
}


function xShape(){
  makeImage("https://img.clipartfest.com/14d203b6aca7377ec9c33486d52b1066_x-no-background-clipart-1-x-out-clipart-no-background_600-532.png",mouseX+6,mouseY+14,6,6)
}

//important

function startGame(){
  attempt = 0;    
  death = makeRect(0,0,300,200,"#4A708B");
  if(level==0){
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    makePolyline("50 50 80 90 140 70 80 150 140 180 250 80","yellow",15);
    makeCircle(58,60,8,"black");
    button = makeCircle(58,60,5,"red");
    button.addEventListener("click",startLevel);
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",233, 80, 15,15);
  }
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
  else if(level==4){
    b=1;  
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    makePolyline("222 64 58 47 57 154 225 173 228 97 116 93 118 127 174 134","yellow",13);
    makeCircle(210,63,8,"black");
    button = makeCircle(210,63,5,"red");
    button.addEventListener("click",startLevel);
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",153, 121, 16,16);
    platform5 = makeImage("https://img.clipartfest.com/53d5952f53019583fd8c5bfbc212b9cb_pink-mouse-clip-art-mouse-clipart-no-background_298-294.png", 200,87, 15, 15);
    texto.innerHTML = "Race. Race. Race! Beat Maggie with your maneuver speed! Just don't expect her to play fair!"; 
    stopAnimationFrame(platform);
  }
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
  else if(level==6){
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    makeCircle(120,110,8,"black");
    button = makeCircle(120,110,5,"red");
    button.addEventListener("click",startLevel);
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",160, 80, 16,16);  
    texto.innerHTML = "Hey, there is no pathway! Well, build one!";
  }
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
    platform2 =  makeRect(140,170,20,20,"orange"); 
    platform2.addEventListener("click",appear);  
    //
    makeCircle(130,75,8,"black");
    button = makeCircle(130,75,5,"red");
    button.addEventListener("click",startLevel);
    texto.innerHTML = "Lo siento, pero no puedo encontrar el nivel que buscas.";
    lostPlatforms();
  }
}

//important
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
      stopAnimationFarmae(mice);
  }
  requestAnimationFrame(mice);
}
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

function startLevel(){
///
  if(level==2){
  boy.setAttribute("stroke","#4A708B");
  boy1.setAttribute("stroke","#4A708B");
  text2.setAttribute("fill", "#4A708B");
  }
  if(level==4 && b==1){
    mice();
  }
///    
  attempt = attempt+1;
  if(attempt==1){
    accio.innerHTML = "Attempt: "+attempt;
  }
  else{
    accio.innerHTML = "Attempts: "+attempt;
  }
  mouse = makeImage("https://img.clipartfest.com/1b742d0aa54afc97a54f90d24c61fd2d_mouse-clip-art-photos-maus-clipart-bilder_282-300.png", mouseX, mouseY, 15, 15);
  mouse.setAttribute("opacity",1);
  button.setAttribute("fill","#FF8C00");
  button.removeEventListener("click",startLevel);
  canvas.setAttribute("cursor","pointer");
  canvas.addEventListener('mousemove', moveMouse);
  death.addEventListener('mouseover',endGame);
}

function endLevel(){
///
  if(level==2){
    boy.setAttribute("stroke","yellow");
    boy1.setAttribute("stroke","yellow");
    text2.setAttribute("fill","yellow");  
  }
///
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

function endGame(){
  mouse.setAttribute("display","none");
  button.setAttribute("fill","red");
  canvas.setAttribute("cursor","auto");
  canvas.removeEventListener('mousemove', moveMouse);
  death.removeEventListener('mouseover',endGame);
  button.addEventListener("click",startLevel);
  if(level>=max){
    b=1;     
  }
  if(level<max){  
    xShape();
  }
}

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

// Ms. Squire's Codes

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

function collides(rect1, rect2) {
  var centerX = getX(rect1) + parseFloat(rect1.getAttribute("width"))/2
  var centerY = getY(rect1) + parseFloat(rect1.getAttribute("height"))/2
  return (centerX > getX(rect2) && 
          centerX < getX(rect2) + parseFloat(rect2.getAttribute("width")) &&
         centerY > getY(rect2) &&
         centerY < getY(rect2) + parseFloat(rect2.getAttribute("height")))
}
