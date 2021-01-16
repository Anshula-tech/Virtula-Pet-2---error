class Food{
    constructor(){
        //preload milk bottle images
        this.milkImg = loadImage('images/Milk.png')
        
        //create variables
        this.foodStock=0;
        this.lastFed;
        var foodObj;
    }

    updateFoodStock(foodStock){
        this.foodStock=foodStock;
    }
    
    getFedTime(lastFed){
        this.lastFed=lastFed;
    }
    
    deductFood(){
        if(this.foodStock>0){
          this.foodStock=this.foodStock-1;
        }
    }
    
    getFoodStock(){
        return this.foodStock;
    }
    
    display(){
        background(46,139,87);
        
        var x=80
        var y=100; 
        imageMode(CENTER);
        //image(this.milkImg, 720, 220, 70, 70)
        if(this.foodStock!==0){
         for(var i=0;i<this.foodStock;i++){
           if(i%10===0){
             x=70;
             y=y+50;
           }
           image(this.milkImg,x,y,50,50);
           x=x+30;
         }
        }
    }
}