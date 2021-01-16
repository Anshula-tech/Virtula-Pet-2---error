//something wrong with the displaying of milk bottles, also with deducting food/feeding the dog, also on the dog image changing when its fed.

//Create variables here
var dog, happyDog, database, foodS, foodStock;
var canvas;
var addfood, feedpet;
var fedTime, lastFed;


function preload() {
  //load images here
  dogImg = loadImage('images/dogImg.png');
  happyDogImg = loadImage('images/dogImg1.png');
}

function setup() {
  canvas = createCanvas(800, 800);
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on('value', readStock);

  foodObj = new Food();

  addfood = createButton('Add Food')
  feedpet = createButton('Feed your Dog')
  feedpet.position(700, 95);
  addfood.position(800, 95);
  feedpet.mousePressed(feedDog);
  addfood.mousePressed(addFoods)
  
}


function draw() {  
  background(46, 139, 87);
  
  foodObj.display();

  //create a sprite and put the dog image in it
  dog = createSprite(400, 400);
  dog.addImage(dogImg);
  dog.scale = 0.5;

  drawSprites();
  //add styles here
  textSize(17);
  fill(255)
  text('Note: press the up arrow key to feed Drago', 237, 30)
  textSize(25);
  fill(255);
  text('Food Remaining '+foodS, 267, 200)

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x = x-1;
  }
  
  database.ref('/').update({
    Food: x
  })
}
//function to update food stock
function feedDog(){
  dog.addImage(happyDog);
  
  foodObj.updateFoodStock(foodObj.getFoodStock()-1); 
  database.ref('/').update({ 
    Food:foodObj.getFoodStock(), 
    FeedTime:hour(), 
    gameState:"Hungry" 
  })
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}



