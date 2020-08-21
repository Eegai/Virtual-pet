//Create variables here
var dog, happyDog, database,
 foodS, foodStock
function preload()
{
  //load images here
  kt = loadImage("Dog.png")
  gg = loadImage("happydog (1).png")
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,100,100)
  dog.addImage(kt)
dog.scale=0.35
database = firebase.database()
foodStock=database.ref('Food')
writeStock(20)
foodStock.on("value",readStock)

}


function draw() {  
  background("wheat")

  if(keyWentDown(UP_ARROW)){
    if(foodS<1){
  
      foodS=0
      
    }else{
      foodS=foodS-1
    }
    writeStock(foodS)
    if(foodS>0)
    dog.addImage(gg)
  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(kt)
  }


dog.display()
  drawSprites();
  //add styles here
  textSize(20)
 fill (0,0,0)
  stroke (0,0,0)
text (foodS,100,50)
text ("Food = ",30,50)
text("Note : Press UP_ARROW Key to feed the dog milk",30,100)
}
function readStock(data){
  foodS=data.val() ;

}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


