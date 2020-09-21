// Make bike sprites
 
const WIDTH = 800, HEIGHT = 600;
 
let bikeImgs = new Array();
let bikeSprites = new Array();
let carImg;
let carSprite;
 
function preload() {
 bikeImgs.push(loadImage("images/1199.jpg"));
 bikeImgs.push(loadImage("images/r1.jpg"));
 bikeImgs.push(loadImage("images/rsv4.jpg"));
 bikeImgs.push(loadImage("images/s1krr.jpg"));
 carImg = loadImage("images/car.png")
}
 
function setUpCar() {
animation.push(carImg)
 carSprite = createSprite(50, 50, 100, 100);
 carSprite.addImage(carImg);
 carSprite.rotateToDirection = true;
 carSprite.friction = 0.01;
 carSprite.debug = true;
}
 
function setup() {
 createCanvas(WIDTH, HEIGHT);
 for (let i = 0; i < bikeImgs.length; i++) {
 bikeImgs[i].resize(100, 100);
 bikeSprites.push(createSprite(random(50, WIDTH - 50), random(50, HEIGHT - 50), 50, 50));
 bikeSprites[i].addImage(bikeImgs[i]);
 bikeSprites[i].addSpeed(random(1, 2), random(0,360));
 bikeSprites[i].mass = random(10, 100);
 //bikeSprites[i].rotation = random(0, 360);
 bikeSprites[i].debug = true;
 }
 setUpCar();
}
 
function draw() {
 background(127);
 drawSprites();
 // bike collisions with the walls
 for (let i = 0; i < bikeSprites.length; i++) {
 if (bikeSprites[i].position.x - bikeImgs[i].width / 2 <= 0) {
 bikeSprites[i].velocity.x = abs(bikeSprites[i].velocity.x);
 } else if (bikeSprites[i].position.x + bikeImgs[i].width / 2 >= WIDTH) {
 bikeSprites[i].velocity.x = - abs(bikeSprites[i].velocity.x)
 }
 if (bikeSprites[i].position.y - bikeImgs[i].height / 2 <= 0) {
 bikeSprites[i].velocity.y = abs(bikeSprites[i].velocity.y);
 } else if (bikeSprites[i].position.y + bikeImgs[i].height / 2 >= HEIGHT) {
 bikeSprites[i].velocity.y = - abs(bikeSprites[i].velocity.y)
 }
 }
 // bike collisions with each other
 for (let i = 0; i < bikeImgs.length - 1; i++) {
 for (let j = i + 1; j < bikeImgs.length; j++) {
 bikeSprites[i].bounce(bikeSprites[j]);
 }
 }
 print(rightPressed);
 // animate the "car"
 if (rightPressed && carSprite.velocity.x < 3.0) {
 carSprite.velocity.x += 0.1;
 }
 if (leftPressed && carSprite.velocity.x > -3.0) {
 carSprite.velocity.x -= 0.1;
 }
 if (upPressed && carSprite.velocity.y > -3.0) {
 carSprite.velocity.y -= 0.1;
 }
 if (downPressed && carSprite.velocity.y < 3.0) {
 carSprite.velocity.y += 0.1;
 }
 if (carSprite.position.x < 50) {
 carSprite.remove();
 setUpCar();
 }
 if (carSprite.position.x < 50 || 
 carSprite.position.x > WIDTH - 50 ||
 carSprite.position.y < 50 ||
 carSprite.position.y > HEIGHT - 50) {
 carSprite.remove();
 setUpCar();
 }
 // collide the car
 for (let i = 0; i < bikeImgs.length; i++) {
 if (carSprite.overlap(bikeSprites[i])) {
 carSprite.remove();
 setUpCar();
 }
 }
}
 
let upPressed = false, downPressed = false, 
 leftPressed = false, rightPressed = false;
 
function keyPressed() {
 print("PRESS");
 if (keyCode == RIGHT_ARROW) {
 rightPressed = true; 
 }else if (keyCode == LEFT_ARROW) {
 leftPressed = true;
 }else if (keyCode == DOWN_ARROW) {
 downPressed = true; 
 } else if (keyCode == UP_ARROW) {
 upPressed = true; 
 } else {
 }
}
 
function keyReleased() {
 if (keyCode == RIGHT_ARROW) {
 rightPressed = false; 
 }else if (keyCode == LEFT_ARROW) {
 leftPressed = false; 
 }else if (keyCode == DOWN_ARROW) {
 downPressed = false; 
 } else if (keyCode == UP_ARROW) {
 upPressed = false; 
 } else {
 }
}
