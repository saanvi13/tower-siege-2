class Slingshot{
    constructor(bodyA,pointB){
        var con = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.3,
            length : 10
           }
        this.pointB=pointB;
        this.chain= Constraint.create(con);
        World.add(myWorld,this.chain);
    }

      fly(){
          this.chain.bodyA=null;
          
      }
      
      attach(body){
          this.chain.bodyA=body;
      }
      display(){
          if(this.chain.bodyA){

          var pointA = this.chain.bodyA.position;
          var pointB = this.pointB; 

          push();
          stroke("yellow");
          strokeWeight(10);
          line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
          pop();
          }
      }


}