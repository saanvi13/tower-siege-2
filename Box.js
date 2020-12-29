class Block {
  constructor(x,y){

     var abc = {
         density:1,
         friction:1,
         restitution:0.3,
         isStatic:false
     }

      this.body = Bodies.rectangle(x,y,30,40,abc);
      this.width = 30;
      this.height = 40;
      World.add(myWorld,this.body);
  }

  
  display() {

    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();

  }
}