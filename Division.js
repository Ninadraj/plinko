class Division {
    constructor(x,y,weight,height){
        var options={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,weight,height,options);
        this.w=weight;
        this.h=height;
        World.add(world,this.body);
    }
    display (){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.w,this.h);
    }
}