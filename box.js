class box{

    constructor(x,y,width,height){
        var body_options ={
            restitution: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height, body_options);
        World.add(world,this.body);
       this.width=width;
       this.height=height;
        }

        display(){
        var angle= this.body.angle 
        rectMode(CENTER);
        push ()
        fill ("blue"); 
        rotate (angle);
        translate(this.body.position.x,this.body.position.y);
        rect(0,0,this.width,this.height);
        pop ()
        }
}