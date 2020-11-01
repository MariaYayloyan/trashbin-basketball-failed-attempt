class Dustbin{
    constructor(x,y){
       this.body = Bodies.rectangle(x,y,20,100);
   
       World.add(world, this.body);
   }
   display(){
       var pos = this.body.position;
   
       translate(pos.x,pos.y);
       rectMode(CENTER);
       fill(100,0,0);
       rect(pos.x,pos.y,50,105);
   }
   }