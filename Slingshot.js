class Slingshot {
    constructor (bodyA , pointB) {
        this.pointB = pointB
        this.rope = Constraint.create({bodyA : bodyA , pointB : pointB , stiffness : 0.1 , length : 400})
        World.add(world,this.rope)
    }

    attach(body){
        this.rope.bodyA = body;
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
            var bA = this.rope.bodyA.position
            var pB = this.pointB
            push();
            strokeWeight(5)
            line(bA.x , bA.y , pB.x , pB.y)
            pop();
        }
       
    }
}