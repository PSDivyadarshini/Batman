class createDrop {
    constructor(x,y){
      var options={

          restitution:0.96,
          friction:0.1,
          density:0.80
      }
      this.x=x;
      this.y=y;
      this.r=5;
      this.rain=Bodies.circle(x,y,5,options);
     
      World.add(world,this.rain);
      
    }

    display(){
        var maxDrops=100
        var pos=this.rain.position
       
        
        push()
        translate(pos.x,pos.y);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop()
        
    }
    updateY(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{X:random(0,400),y:random(0,400)})
        }
       
    }
}
