var namespace = "http://www.w3.org/2000/svg"
var level = 1;
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
  if(level==1){
    track = makeText("Level "+level+":",12,27,20,"Amatic SC","white");
    accio = makeText("Attempt:  "+attempt,216,27,20,"Amatic SC","white");
    makeText("Got", 105, 100, 70,"Covered By Your Grace","yellow");
    makeText("Cheese?", 45, 160, 73,"Covered By Your Grace","yellow");      
    makeCircle(73,135,8,"black");
    button = makeCircle(73,135,5,"red");
    button.addEventListener("click",startLevel);
    cheese = makeImage("http://img.clipartall.com/cheese-clipart-cheese-clipart-1738_1386.png",181, 52.5, 15,15);
    texto.innerHTML = "Got Cheese? How can a mouse crosss empty space? Wouldn't it be nice if there was a bridge...";
  }
}

//important

function startLevel(){
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
  canvas.setAttribute("cursor","pointer");
  canvas.addEventListener('mousemove', moveMouse);
  death.addEventListener('mouseover',endGame);
}

function endLevel(){
  level = level+1;
  button.setAttribute("fill","green");
  canvas.setAttribute("cursor","auto");
  canvas.removeEventListener('mousemove', moveMouse);
  death.removeEventListener('mouseover',endGame);
  screen =  makeRect(0,0,300,200,"black",0.3);
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
  xShape();
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
