// Swet the angles for the chart
let angles = [50,100,120,50,40];
function setup() {
createCanvas(720, 400);
noStroke();
noLoop(); // Run once and stop
}
// Make rectangles and colour code to movie
function draw() {
background (100);
pieChart(300, angles);
fill (255,0,0);
rect (10,10,15,15);
fill (0,255,0);
rect (10,40,15,15);
fill (0,0,255);
rect (10,70,15,15);
fill (150,0,150);
rect (10,100,15,15);
fill (0,200,200);
rect (10,130,15,15);
textSize (14);
fill (255);
text (
'Comedy'
, 40,25);
fill (255);
text (
'Action'
, 40,55);
fill (255);
text (
'Romance'
, 40,85);
fill (255);
text (
'Drama'
, 40, 115);
fill (255);
text (
'SciFi'
, 40, 145);
textSize(20);
fill(255,0,0);
text (
'Comedy'
, 370,120);
text(4,370,140);
fill (0,255,0);
text (
'Action'
, 320,300);
text (5,320,320);
fill(0,0,255);
text (
'Romance'
,250,140);
text (6,250,160);
fill (150,0,150);
text (
'Drama'
,430,170);
text (1,430,190)
fill(0,200,200);
text (
'SciFi'
,430,240);
text(4,430,260);
}
// set the radius height and width
function pieChart(diameter, data) {
let lastAngle = 0;
for (let i = 0; i < data.length; i++) {
let gray = map(i, 0, data.length, 0, 255);
fill(gray);
arc(
width / 2,
height / 2,
diameter,
diameter,
lastAngle,
lastAngle + radians(angles[i])
);
lastAngle += radians(angles[i]);
}
}