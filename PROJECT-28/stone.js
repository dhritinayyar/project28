class Stone{
construructor(x,y,diameter){
    var options={
    isStatic:false,
    restitution:0.5,
    friction:1.4,
    density:1.2,
 }
this.body=Bodies.circle(x,y,diameter,options)
this.diameter=diameter;
this.image=loadImage("sprites/puck.png");
World.add(world,this.body);

}

display(){

    push ();
    translate (this.body.position.x,this.body.position.y);
    imageMode (CENTER);
    image (this.image,0,0,this.diameter);
    pop ();
}


}