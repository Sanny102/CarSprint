let redCircleAngle = 0;
let blueCircleAngle = 0;
let width = 400;
let height = 400;

function setup() {
    createCanvas(width, height);
}

function draw() {
    angleMode(DEGREES);
    // Fill in the background with a dark green colour
    background(20, 170, 0);
    fill(0, 140, 0);
    // Draw the gray road
    strokeWeight(40);
    stroke(100);
    ellipse(width / 2, height / 2, 200, 100);
    noFill();
    strokeWeight(1);
    stroke(255, 255, 0);
    // Draw the outer yellow line in the road
    ellipse(width / 2, height / 2, 205, 105);
    strokeWeight(1);
    stroke(255, 255, 0);
    // Draw the inner yellow line in the road
    ellipse(width / 2, height / 2, 200, 100);
    noStroke();

    let blueCentreX = 200;
    let blueCentreY = 110;
    let blueRadius = 90;
    let blueCircleX = blueRadius * cos(blueCircleAngle);
    let blueCircleY = blueRadius - 40 * sin(blueCircleAngle);

    let redCentreX = 200;
    let redCentreY = 90;
    let redRadius = 110;
    let redCircleX = redRadius * cos(redCircleAngle);
    let redCircleY = redRadius - 60 * sin(redCircleAngle);

    // Draw and Animate the blue circle
    fill(0, 0, 255);
    ellipse(blueCentreX + blueCircleX, blueCentreY + blueCircleY, 10, 10);
    // Draw and Animate the red circle
    fill(255, 0, 0);
    ellipse(redCentreX + redCircleX, redCentreY + redCircleY, 10, 10);

    blueCircleAngle++;
    redCircleAngle += 2;
}






  