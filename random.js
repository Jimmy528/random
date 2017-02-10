var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
     makeRect(0,0,1000,1000,"lightblue",1)  
     makeCircle(30,30,10,"yellow",1)
    makeRect(0,50,200,50,"blue",1)
    makeImage("http://www.clipartbest.com/cliparts/dc7/erL/dc7erLyMi.png",50,20,20,20,1)
     makeImage("http://www.clipartbest.com/cliparts/dc7/erL/dc7erLyMi.png",100,10,10,10,1)
     makeImage("http://www.clipartlord.com/wp-content/uploads/2014/10/shark10.png",50,50,40,40,1)
     makeImage("http://images.clipartpanda.com/whale-clip-art-blue-grey-whale.svg",150,40,30,30,1)
     makeImage("http://www.pd4pic.com/images/corals-underwater-algae-ecosystem-ocean-floor.png",0,45,200,100,1)
              
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
makeRect(0,0,1000,1000,"lightblue",1)
makeCircle(30,30,15,"yellow",1)
makeImage("https://img.clipartfest.com/4e292f105de8055f7dc6faf98135dfc6_airliner20clipart-plane-clipart-images_1014-406.svg",50,30,45,25,1)
makeImage("http://www.clipartlord.com/wp-content/uploads/2016/02/flying-saucer12.png",100,60,30,30,1)
makeImage("http://images.clipartpanda.com/cloudy-clipart-black-and-white-white-cloud.svg",30,40,20,20,1)
makeImage("http://images.clipartpanda.com/cloudy-clipart-black-and-white-white-cloud.svg",120,40,20,20,1)

}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
 makeRect(0,0,1000,1000,"black",1)
 makeCircle(30,40,10,"darkgoldenrod",1)
 makeCircle(100,120,80,"blue",1)
 makeCircle(70,90,10,"green",1)
 makeCircle(80,85,10,"green",1)
 makeCircle(80,90,10,"green",1)
 makeCircle(150,90,10,"green",1)
 makeCircle(145,85,10,"green",1)
 makeCircle(140,90,10,"green",1)
 makeImage("https://img.clipartfox.com/ba07d6f033256bf88b52a5ecf8e3955b_flying-saucers-clip-art-ufo-clipart_500-345.jpeg",100,5,30,30,1)
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    varmyRandom = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if(varmyRandom < 0.33){
        createFirstScene()
    }else if(varmyRandom < 0.67){
        createSecondScene()
    }else{
        createThirdScene()
    }
    // Else, if the number is less than 0.67, call the function to create your second scene.

    
    
    // Else, call the function to create your third scene.
    
    
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
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