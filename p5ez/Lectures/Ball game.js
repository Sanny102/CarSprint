let num = 4;
const w = 800, h = 700;
let objectX = new Array(num);
let objectY = new Array(num);
let speedY = new Array(num);
let pX = w/2;
let pY = h- 50;
let nextToFire = 0;
let index = new Array (num);

function setup() {
createCanvas (w,h);
restart();

}



function draw() {
background(200);
//Score board
strokeWeight(10);
line(100,0,100,h);
textStyle(BOLD);
textSize(20);
fill(0);
text('SCORE',10,30);

strokeWeight(1);
fill(255);

if(frameCount%120 == 0) {
    speedY[nextToFire] = 10;
    nextToFire++;
}

//Balls
for (let i = 0; i < num; i++) {
    objectY[i] += speedY [i];
ellipse(objectX[i],objectY[i],50,50);
  }

//Player
fill(0,200,150);
rect (pX,pY,60,20);
if(keyIsDown (LEFT_ARROW)) {
    pX -= 6;
}
if(keyIsDown(RIGHT_ARROW)){
    pX += 6;
}
    if(pX < 105) pX = 105;
    if (pX > w-60) pX = w-60;

}
  function restart(){
      for (let i=0; i<num; i++){
          objectX[i] = i * 100 + 150;
          objectY[1] = 50;
          speedY[1] = 0;
          index[i] = i;

      }
      index = shuffle(index);
  } 

  function dog(array) {
      for(let i=0;  i<array.length; i++) {
          let j = round(random (0,num-1));
          let temp = array[i];
          array [i] = array 

      }
  }