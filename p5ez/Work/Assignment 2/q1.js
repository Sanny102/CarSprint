let r = 15;
let spriteH = 32;
let spriteW = 32;
let carSprite;
let carImage;
let grassImage;
let roadImage;
let finishImage;
let x = 0;
let y = 0;

function preload() {
    noLoop();
    fileContent = loadStrings('../../track.txt');
    grassImage = loadImage('../../Images/green tile.png');
    roadImage = loadImage('../../Images/grey tile.png');
    finishImage = loadImage('../../Images/finish.png');
    carImage = loadImage('../../Images/car2.png');
    setUpCar();
}

function setUpCar() {
    //animation.push(carImage)
    carSprite = createSprite(width / 2, height / 2);
    carSprite.addImage(carImage);
    carSprite.rotateToDirection = true;
    carSprite.friction = 0.01;
    carSprite.debug = true;
    carImage.resize(250, 500);
}



function setup() {
    createCanvas(480, 480);
    group = new Group();

    for (let i = 0; i < fileContent.length; i++) {
        let tokens = splitTokens(fileContent[i]);

        for (let j = 0; j < tokens.length; j++) {
            if (tokens[j] == 0) {
                grass = createSprite((i * width / tokens.length) + r, (j * height / tokens.length) + r, 32, 32);
                grass.addImage(grassImage);
            }

            else if (tokens[j] == 1) {
                road = createSprite((i * width / tokens.length) + r, (j * height / tokens.length) + r, 32, 32);
                road.addImage(roadImage);
            }

            else if (tokens[j] == 2) {
                finish = createSprite((i * width / tokens.length) + r, (j * height / tokens.length) + r, 32, 32);
                finish.addImage(finishImage);

                car = createSprite((i * width / tokens.length) + r, (j * height / tokens.length) + r, 32, 32);
                car.addImage(carImage);
            }
        }
    }

}


function draw() {
    background(220);
    drawSprites();

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

    if (carSprite) {
        if (carSprite.position.x < width) {
            carSprite.remove();
            setUpCar();
        }

        if (carSprite.position.x < width || carSprite.position.y < height || carSprite.position.y > height - 50) {
            carSprite.remove();
            setUpCar();
        }
        // collide the car
        for (let i = 0; i < grassImage.length; i++) {
            if (carSprite.overlap(grassSprites[i])) {
                carSprite.remove();
                setUpCar();
            }
        }
    }
}

function keyPressed() {
    // print("PRESS");
    if (keyCode == RIGHT_ARROW) {
        rightPressed = true;
    } else if (keyCode == LEFT_ARROW) {
        leftPressed = true;
    } else if (keyCode == DOWN_ARROW) {
        downPressed = true;
    } else if (keyCode == UP_ARROW) {
        upPressed = true;
    } else {
    }
}
let upPressed = false, downPressed = false,
    leftPressed = false, rightPressed = false;

function keyReleased() {
    if (keyCode == RIGHT_ARROW) {
        rightPressed = false;
    } else if (keyCode == LEFT_ARROW) {
        leftPressed = false;
    } else if (keyCode == DOWN_ARROW) {
        downPressed = false;
    } else if (keyCode == UP_ARROW) {
        upPressed = false;
    } else {
    }
}

//if (dist(carX,carY,grassX,grassY) < 20) {torgetX = 10; targetY = 10;}
