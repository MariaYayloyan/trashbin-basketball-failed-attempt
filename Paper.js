class Paper{
 constructor(x,y){
    var options = {
        isStatic : false,
        restitition : 0.3,
        friction : 0.5,
        density : 1.2
    }

    this.body = Bodies.circle(x,y,5,options);

    World.add(world, this.body);
}
display(){
    var pos = this.body.position;

    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    fill(0,100,0);
    ellipse(50,600,5,5);
}
}