// Setting up the canvas

function setup() { 
 createCanvas(750,500);
}

function draw() {
  strokeWeight(2);

 //square 1 followed by the horizontal lines

 fill(255,0,0);
 rect(0,0,250,250);
 stroke(0,0,255);

 for(let i=0; i<=250; i+=7) {
 line(0,i,250,i);
  }

// Setting up the shape with the lines
  noStroke()
  fill(255,0,0);
  ellipse(125,125,80,80);
  stroke(255,255,0);



  line(95,140,95,105);
  line(105,155,105,95)
  line(115,160,115,90);
  line(125,162,125,87);
  line(135,160,135,90);
 line(145,155,145,95);
 line(155,140,155,105);


  //Square 2
  fill(255,255,0);
  rect(250,0,250,250);
  stroke(255,0,0);

  for(let i=0; i<=250; i+=7) {
  line (250,i,500,i);
 }

 noStroke()
 rect(325,85,90,80);
 stroke(0,0,255);
 for(let x=330; x<=410; x+=10) {
   line(x,85,x,165);
 }
 
 
 //Square 3
 fill(0,0,255);
 rect(500,0,250,250);
 stroke(255,255,0);
 for (let i=0; i<=250; i+=7) {
   line(500,i,750,i);
 }
noStroke()
triangle(580,165,625,80,670,165);
stroke(255,0,0);
line(595,145,595,165);
line(605,125,605,165);
line(615,105,615,165);
line(625,95,625,165);
line(635,105,635,165);
line(645,125,645,165);
line(655,145,655,165);


 //Square 4
 fill(255,0,0);
 rect(0,250,250,500);
 stroke(255,255,0);
 for (let i=250; i<=500; i+=7) {
   line(0,i,250,i);
 }

noStroke()
rect(60,330,120,80);
stroke(0,0,255);
for (let x=65; x<=175; x+=10) {
  line(x,330,x,410);
}

 //Square 5
noStroke()
fill(255,255,0);
rect(250,250,500,500);
stroke(0,0,255);
for (let i=250; i<=500; i+=7) {
  line(250,i,500,i);
 }
 noStroke()
beginShape();
vertex(425,330);
vertex(330,330);
vertex(300,410);
vertex(410,410);
vertex(455,410);
vertex(425,330);
endShape();

stroke(255,0,0);
line(313,385,313,410);
line(323,355,323,410);
line(333,330,333,410);
line(343,330,343,410);
line(353,330,353,410);
line(363,330,363,410);
line(373,330,373,410);
line(383,330,383,410);
line(393,330,393,410);
line(403,330,403,410);
line(413,330,413,410);
line(423,330,423,410);
line(433,350,433,410);
line(443,385,443,410);

 //Square 6
 noStroke()
 fill(0,0,255);
 rect(500,250,750,500);
 stroke(255,0,0);
 for (let i=250; i<=500; i+=7) {
   line(500,i,750,i)
  }
 
   noStroke();
  beginShape();
  vertex(555,410);
  vertex(595,330);
  vertex(595,330);
  vertex(695,330);
  vertex(655,410);
  vertex(555,410);
 endShape();

stroke(255,255,0);
line(565,395,565,410);
line(575,380,575,410);
line(585,360,585,410);
line(595,340,595,410);
line(605,330,605,410);
line(615,330,615,410);
line(625,330,625,410);
line(635,330,635,410);
line(645,330,645,410);
line(655,330,655,410);
line(665,330,665,390);
line(675,330,675,370);
line(685,330,685,350);
}


 
