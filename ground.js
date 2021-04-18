class Ground{
constructor(x,y) {
    var option={
    isStatic:true
  }

  this.body = Bodies.rectangle(x,y,1200,50,option);
  this.width= 1200;
  this.height = 50;
  World.add(world,this.body);
}
display(){
    push();
    fill('red')
    strokeWeight(4)
    stroke('darkred')
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.width, this.height)
    pop();
}
}