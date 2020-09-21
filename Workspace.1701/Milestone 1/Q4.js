//set varibles
var s = 0;	
var sc = 5;	
let angle = 1;
var border = 3;	
  
     let radius = 100;

function setup() {
  createCanvas(400, 400);
  

// set up ying yang radius
}
function draw() {
  background(0);
  angleMode(DEGREES);
  let size = sc*height/10;	
  centerX = width/2;
  centerY = height/2;
  angle+=1;
// fill and create arc in ying yang
  translate(width/2,height/2);
  push(); 
  rotate(angle);
  strokeWeight(border);
  stroke(0);
  fill(255);
  ellipse(0, 0, size+border);
  fill(0);
  arc(0, 0, size, size, 270, 90);
  noStroke();
  ellipse(0, 0+size/4, size/2);
  fill(255);
  ellipse(0, 60, size/8);
  ellipse(0, 0-size/4, size/2);
  fill(0);
  ellipse(0, 0-60, size/8);
  stroke(255);
  strokeWeight(5);
  pop();
}