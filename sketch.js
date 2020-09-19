//Create variables here
var dog;
var dog1;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  dog1=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup(){
  database=firebase.database();
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
  createCanvas(1000, 500);
  dog=createSprite(100,200,10,10);
  dog.addImage(dog1);
 // dog.scale(0.5);
  //dog.addImage(happyDog);
  
}


function draw() {  
background(46, 139, 87);
if(keyDown(UP_ARROW)){
  writeStockS(foodS);
  firebase.foodStock=foodStock+1;
  dog1.addImage(happyDog);
  dog1.pos(CENTER_ALIGN);
}
  drawSprites();
  text(firebase.foodStock=print )
  textSize(20);
  fill ("red");
  strokeWeight(5);
  text("Note:Press UP_ARROW Key to feed Drago milk!",450,450);
  text("Food remaining = 10",400,20)

  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({Food:x})
}

