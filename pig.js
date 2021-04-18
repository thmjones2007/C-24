class Pig{
    constructor(x,y){
        var bounce={
            restitution:0.8,
            density:1.0,
            friction:1.2
          }
          
        this.body = Bodies.rectangle(x,y,50,50,bounce);
        this.width= 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)

        strokeWeight(5);
        stroke('darkgreen')
        fill('green')

        rectMode(CENTER);
        rect(0,0,this.width,this.height);

        pop();
    }
}