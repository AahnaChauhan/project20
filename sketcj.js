var car, wall;
var speed, weight;

function setup() {
    createCanvas(1600,400);
    car = createSprite(50 , 200, 50, 50);
    car.velocityX = speed;
    wall = createSprite(1500 ,200, 60, height/2);
}  

function draw() {
    background(0, 0, 0); 
    drawSprites(); 
}

//car = createSprite(50, 200, 50, 50);
//car.velocityX = speed;
//wall = createSprite(15, 200, 60, height/2);
//}
