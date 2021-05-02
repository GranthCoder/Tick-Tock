var hr,min,sec;
let secAngle,minAngle,hourAngle;
function setup() {
  createCanvas(800,400);
  //hour = hour();
  //min = min();
  //sec = second();

  angleMode(DEGREES);
  //console.log(hour);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

  hr = hour();
  min = minute();
  sec = second();

  translate(400,200);
  rotate(-90);

  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hourAngle = map(hr%20,0,12,0,360);

  push();
  stroke("blue");
  strokeWeight(7);
  rotate(secAngle);
  line(0,0,150,0);
  pop();

  push();
  stroke("red");
  strokeWeight(7);
  rotate(minAngle);
  line(0,0,90,0);
  pop();

  push();
  stroke("green");
  strokeWeight(7);
  rotate(hourAngle);
  line(0,0,50,0);
  pop();

  strokeWeight(10);
  noFill();
  stroke("blue");
  arc(0,0,375,375,0,secAngle);

  stroke("red");
  arc(0,0,350,350,0,minAngle);

  stroke("green");
  arc(0,0,325,325,0,hourAngle);
  //drawSprites();
}