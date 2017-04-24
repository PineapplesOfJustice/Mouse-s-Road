var check=0;
var f=0;
var z=0;
var t=0;
var xCoord;   
var yCoord;
var xCo;
var yCo;
var n;
var h= makeRect(2,2,4,4)
h.setAttribute("fill-opacity",0)
h.setAttribute("stroke","black")
h.setAttribute("stroke-width",0.7)
h.setAttribute("cursor","pointer")
var c= makePolyline("0.1 2 3.6 5 8.5 0.8","green", 0.9, 0)
document.addEventListener('keypress', cont);
document.addEventListener('keyup', joven);
function cont(event){
  var s = event.keyCode;
  // spacebar
  if(s == 32){
    if(z==0){
      c.setAttribute("opacity",1)
      z=1;
      n=1;
    }
    else{
      c.setAttribute("opacity",0)
      z=0;
    }
  }
  else{
    xCoord = xCo
    yCoord = yCo
    check=1;
    n=0;
  }
}
function joven(){
  if(n==0){
    check=0;
  }
}
function plotDot(event){
  var pt = canvas.createSVGPoint()
  pt.x = event.clientX
  pt.y = event.clientY
  var svgPt = pt.matrixTransform(canvas.getScreenCTM().inverse())
  if(check==0){ 
    xCoord = svgPt.x;
    yCoord = svgPt.y;
    xCo = svgPt.x;
    yCo = svgPt.y;
  }
  else{
    xCo = svgPt.x;
    yCo = svgPt.y;
  }
  createDot();
}
function createDot(){  
  if(check<1){
    t=t+1;
    makeCircle(xCoord, yCoord, "1", "red")
    makeText(t+"",3+xCoord, -2+yCoord,5,"Dancing Script","black")
    console.log("point "+t+": ("+xCoord.toFixed(2)+", "+yCoord.toFixed(2)+")")
    check=1;
  }  
  else if(check==1){
    t=t+1;
    makeCircle(xCo, yCo, "1", "red")
    makeText(t+"",3+xCo, -2+yCo,5,"Dancing Script","black")
    makeLine(xCoord,yCoord,xCo,yCo,"blue")
    console.log("point "+t+": ("+xCo.toFixed(2)+", "+yCo.toFixed(2)+")")
    miscellanius();
    check=0;
  }
}
function miscellanius(){
  if(z==1){
    var aFormula = xCo - xCoord
    var bFormula = yCo - yCoord
    if(aFormula <0){
      aFormula = aFormula*-1
    }
    if(bFormula <0){
      bFormula = bFormula*-1
    }
    var q = (aFormula*aFormula)+(bFormula*bFormula)
    var master = Math.sqrt(q)
    var xX = (xCoord+xCo)/2
    var yY = (yCoord+yCo)/2
    if(xCoord< xCo && yCoord<yCo || xCo<xCoord && yCo<yCoord){
      makeText("("+master.toFixed(1)+")",xX+4,yY-4,3,"Rock Salt","green")   
    }
    else{
      makeText("("+master.toFixed(1)+")",xX+4,yY+4,3,"Rock Salt","green")
    }
  }
}