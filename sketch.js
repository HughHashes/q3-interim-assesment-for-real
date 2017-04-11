alert("The clicking the mouse will hurt your eyes if you do it for too long.");

var hoganX = 100;
var hoganY = 100;
var hulky;
var budi;
var changeX = -3;
var changeY = -3;
var budis = [50, 20, 30, 45];
var mit;

function preload(){
    hulky = loadImage("hogan.png");
    budi = loadImage("budi.png");
    mit = loadImage("mit.jpg");
}

function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(0);
    
    fill(100, 0, 255);
    
    if(mouseIsPressed){
        fill(random(0, 255),random(0, 255),random(0, 255));
    }
    
    if(keyIsDown(DOWN_ARROW)){
        background(0, 255, 0);
    }
    if(keyIsDown(LEFT_ARROW)){
        background(255, 0, 0);
    }
    if(keyIsDown(RIGHT_ARROW)){
        background(255);
    }
    if(keyIsDown(UP_ARROW)){
        background(0, 0, 255);
    }
    
    circles();

    mania();
    heads();
    
}

function mania(){
    image(hulky, hoganX, hoganY, 100, 100);
    hoganX += changeX;
    hoganY += changeY;
    bounce();
    
}

function bounce(){
    //bounce
    if(hoganX < 50){
        changeX = -changeX;
    }
    if(hoganY < 50){
        changeY = -changeY;
    }
    
    if(hoganX > 450){
        changeX = -changeX;
    }
    if(hoganY > 250){
        changeY = -changeY;
    }
}

function heads(){
    for(var i = 0; i < budis.length; i++){
        image(budi,(i+1)*100, 250, budis[i], budis[i]);
    }
    
    for(var i = 3; i > -1; i--){
        image(mit,(i+1)*105, 100, budis[i] + 25, budis[i]);
    }
}

function circles(){
    var y = 25;
    for(var i = 0; i < 8; i++){
        ellipse(25, y, 50, 50);
        ellipse(575, y, 50, 50);
        y += 50;
    }
    
    var x = 25;
    while(x < 600){
        ellipse(x, 25, 50, 50);
        ellipse(x, 375, 50, 50);
        x += 50;
    }
    
}