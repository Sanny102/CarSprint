let objectY = [100,142,243,435,136,534,142];
let closestY = 0;

function preload() {

}

function setup() {
    for (let i = 0; i < objectY.length; i++) {
        if ( objectY [i] > closestY) {
            closestY = objectY[i];
            closestIndex = i;
        }
    } 
    print(closestY);
    print (closestIndex);
}

function draw() {

}