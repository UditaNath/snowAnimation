class Snow{
    constructor(x,y){
        var options={            
            
            friction: 0,
            density: 20,
            isStatic: false
        }
        this.r=15
        this.body=Bodies.circle(x,y,this.r,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("snowflake2.png",);
        World .add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        imageMode (CENTER);
        image (this.image,0,0,this.r,this.r);
        
        pop ();
    }
}